const { logger } = require('../utils/logs.util');

/**
 * Validate global errors and send response
 */
const errorHandlerMiddleware = (err, req, res, next) => {
  const errorStatus = err.statusCode || 500;
  const errorMessage = err.message;

  logger('error', `{${req.method}} ${req.originalUrl} -> ${errorMessage}`);

  return res.status(errorStatus).json({ error: 'Something went wrong' });
};

module.exports = errorHandlerMiddleware;
