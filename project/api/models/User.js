import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
  provider: DataTypes.STRING,
  providerId: {
    type: DataTypes.STRING,
    field: 'providerid', // maps providerId to providerid column in DB
  },
}, {
  tableName: 'Users', 
  timestamps: true,              // enable automatic timestamps
  createdAt: 'createdat',        // map Sequelize's createdAt to "createdat"
  updatedAt: 'updatedat',        // map Sequelize's updatedAt to "updatedat"
});

export default User;