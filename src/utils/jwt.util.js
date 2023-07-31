const { jwtSecret } = require('../configs/env.config');

/**
 * Generate JWT
 * @param {*} uid ID of the user to generate and be included in the JWT
 * @returns {Promise} Promise with the generated token
 */
const generateJWT = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    jwt.sign(
      payload,
      jwtSecret,
      {
        expiresIn: '24h',
      },
      (err, token) => {
        if (err) {
          console.error(err);
          reject('Token could not be generated');
        } else {
          resolve(token);
        }
      }
    );
  });
};

/**
 * Validate JWT
 * @param {*} token Token to validate
 * @returns {Array} [isValid, uid] || [false, null]
 */
const validateJWT = (token = '') => {
  try {
    const { uid } = jwt.verify(token, jwtSecret);
    return [true, uid];
  } catch (error) {
    return [false, null];
  }
};

module.exports = {
  generateJWT,
  validateJWT,
};
