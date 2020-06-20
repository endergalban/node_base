import * as dotenv from 'dotenv';

dotenv.config();

module.exports = {
  [process.env.NODE_ENV]: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB,
    operatorsAliases: 1,
  },
};
