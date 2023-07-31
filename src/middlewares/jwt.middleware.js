const { jwtName, jwtSecret } = require('../configs/env.config');
const { response } = require('express');
const jwt = require('jsonwebtoken');

/**
 * Validate JWT and save uid in req
 */
const jwtValidationMiddleware = (req, res = response, next) => {
  // Get token from header
  const token = req.header(jwtName);

  if (!token) {
    return res.status(401).json({
      error: 'There is no token in the request',
    });
  }

  try {
    const { uid } = jwt.verify(token, jwtSecret);
    req.uid = uid; // save token in req
  } catch (error) {
    return res.status(401).json({
      error: 'Token not valid',
    });
  }

  next();
};

module.exports = jwtValidationMiddleware;
