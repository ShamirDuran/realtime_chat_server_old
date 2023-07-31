/**
 * Validate global errors and send response
 */
const errorHandlerMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  return res.status(statusCode).json({ error: err.message });
};

module.exports = errorHandlerMiddleware;
