const { validationResult } = require('express-validator');

/**
 * Validate express-validator route results.
 * If there is an error, send response with list of errors
 */
const validateResultsMiddleware = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const formattedErrors = errors.mapped();

    for (const key in formattedErrors) {
      delete formattedErrors[key].value;
    }

    return res.status(400).json({
      error: formattedErrors,
    });
  }

  next();
};

module.exports = validateResultsMiddleware;
