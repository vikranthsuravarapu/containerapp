FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the frontend (Vite)
RUN npm run build

# Expose backend port
EXPOSE 3000

# Start backend
CMD ["npm", "start"]