const { jwtName } = require('../configs/env.config');
const { response } = require('express');
const { validateJWT } = require('../utils/jwt.util');
const authService = require('../services/auth.service');

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
    const [isValid, uid] = validateJWT(token);
    if (!isValid) throw new Error();

    const user = authService.findById(uid);
    if (!user) throw new Error();

    req.uid = uid;
  } catch (error) {
    return res.status(401).json({
      error: 'Token not valid',
    });
  }

  next();
};

module.exports = jwtValidationMiddleware;
