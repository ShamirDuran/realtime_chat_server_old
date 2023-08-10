const { body } = require('express-validator');
const validateResultsMiddleware = require('../../middlewares/validateResults.middleware');
const authService = require('../../services/auth.service');

/// Validate if at least one primary field is provided in the request body
const validataAtLeastOnePrimary = (req, res, next) => {
  if (!req.body.email && !req.body.cellphone) {
    return res.status(400).json({ message: 'Email or cellphone is required' });
  }

  next();
};

const signUpValidation = [
  validataAtLeastOnePrimary,
  body('username')
    .exists()
    .withMessage('Username is required')
    .isString()
    .withMessage('Username should be string')
    .trim()
    .isLength({ min: 5, max: 50 })
    .withMessage('Username should be 5 to 50 characters')
    .toLowerCase()
    .escape(),
  body('password')
    .exists()
    .withMessage('Password is required')
    .isString()
    .withMessage('Password should be string')
    .trim()
    .isLength({ min: 5, max: 25 })
    .withMessage('Password should be 5 to 25 characters'),
  body('email')
    .optional()
    .isEmail()
    .withMessage('Provide valid email')
    .trim()
    .isLength({ max: 50 })
    .withMessage('Email should be less than 50 characters')
    .custom(async (value) => {
      const user = await authService.findBy('email', value);
      if (user) throw new Error('Email already exists');
    }),
  body('cellphone')
    .optional()
    .isInt()
    .withMessage('Phone number should be integer')
    .trim()
    .isLength({ min: 10, max: 15 })
    .withMessage('Phone number should be 10 to 15 digits')
    .custom(async (value) => {
      const user = await authService.findBy('cellphone', value);
      if (user) throw new Error('Cellphone already exists');
    }),
  validateResultsMiddleware,
];

const signInValidation = [
  validataAtLeastOnePrimary,
  body('password')
    .exists()
    .withMessage('Password is required')
    .isString()
    .withMessage('Password should be string')
    .trim(),
  body('email').optional().isEmail().withMessage('Provide valid email').trim(),
  body('cellphone')
    .optional()
    .isInt()
    .withMessage('Phone number should be integer')
    .toInt()
    .trim()
    .isLength({ min: 10, max: 15 })
    .withMessage('Phone number should be 10 to 15 digits'),
  validateResultsMiddleware,
];

module.exports = {
  signUpValidation,
  signInValidation,
};
