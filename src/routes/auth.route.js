const express = require('express');
const router = express.Router();
const { login, register, renewToken } = require('../controllers/auth.controller');
const { signUpValidation, signInValidation } = require('./validations/auth.validation');
const jwtValidationMiddleware = require('../middlewares/jwt.middleware');

router.post('/login', signInValidation, login);
router.post('/register', signUpValidation, register);
router.post('/renew-token', jwtValidationMiddleware, renewToken);

module.exports = router;
