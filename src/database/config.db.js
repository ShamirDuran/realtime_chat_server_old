const mongoose = require('mongoose');
const { dbUsername, dbPassword, dbPort, dbName } = require('../configs/env.config');
const { logger } = require('../utils/logs.util');

const databaseHost = `mongodb://${dbUsername}:${dbPassword}@localhost:${dbPort}/${dbName}`;

const dbConnection = async () => {
  try {
    await mongoose.connect(databaseHost, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger('info', 'Database connected');
  } catch (error) {
    logger('error', error.message);
    throw new Error('Error connecting to database');
  }
};

module.exports = {
  dbConnection,
};
