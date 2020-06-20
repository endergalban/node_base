import Sequelize from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = parseInt(process.env.DB_PORT, 10);
const dbUser = process.env.DB_USER;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: process.env.DB,
  host: dbHost,
  logging: false,
  port: dbPort,
  define: {
    freezeTableName: true,
    timestamps: false,
  },
});

export default sequelize;
