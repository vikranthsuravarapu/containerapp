import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import projectRoutes from './routes/projects.js';
import winston from 'winston';
import path from 'path';
import { fileURLToPath } from 'url';
import contactRouter from './contact.js';
import session from 'express-session';
import passport from 'passport';
import './config/passport.js';
import authRouter from './routes/auth.js';
import sequelize from './config/database.js';
import './models/User.js'; // Make sure this is imported

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(session({
  secret: process.env.JWT_SECRET || 'changeme',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

// Content Security Policy
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https://images.pexels.com"],
      frameSrc: ["'self'", "https://www.google.com"], // <-- Add this line
      // add other directives as needed
    },
  })
);

// Request logging middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// API routes
app.use('/api/projects', projectRoutes);
app.use('/api', contactRouter);
app.use('/api/auth', authRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../dist')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Sync database (create tables if they don't exist)
sequelize.sync().then(() => {
  console.log('Database synced');
  // Start your server here
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
  });
}).catch(err => {
  console.error('Failed to sync database:', err);
});

export default app;