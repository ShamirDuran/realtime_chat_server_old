const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,
  prefix: process.env.PREFIX || 'api',
  jwtName: process.env.JWT_NAME || 'Authorization',
  jwtSecret: process.env.JWT_SECRET || 'secret',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1d',
  mongoUsername: process.env.MONGO_USERNAME || 'root',
  mongoPassword: process.env.MONGO_PASSWORD || 'secret',
  mongoDbName: process.env.MONGO_DBNAME || 'realtime_chat',
};
