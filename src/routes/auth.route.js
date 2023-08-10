const express = require('express');
const router = express.Router();
const { signUp, signIn } = require('../controllers/auth.controller');
const { signUpValidation, signInValidation } = require('./validations/auth.validation');

router.post('/signup', signUpValidation, signUp);
router.post('/signin', signInValidation, signIn);

module.exports = router;
