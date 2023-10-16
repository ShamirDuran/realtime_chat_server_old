const { validationResult } = require('express-validator');

/**
 * Validate express-validator route results.
 * If there is an error, send response with list of errors
 */
const validateResultsMiddleware = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const formattedErrors = errors.mapped();
    const errorMessages = Object.values(formattedErrors).map((error) => error.msg);

    return res.status(400).json({
      errors: errorMessages,
    });
  }

  next();
};

module.exports = validateResultsMiddleware;
