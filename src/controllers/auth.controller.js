const { request } = require('express');
const authService = require('../services/auth.service');
const { generateJWT } = require('../utils/jwt.util');

const signUp = async (req = request, res, next) => {
  try {
    const { username, password, email, cellphone } = req.body;

    const user = await authService.register(username, password, email, cellphone);
    const token = await generateJWT(user.uid);

    return res.status(201).json({ user, token });
  } catch (error) {
    next(error);
  }
};

const signIn = async (req = request, res, next) => {
  try {
    const { password, email, cellphone } = req.body;
    let user = null;

    if (email) user = await authService.findBy('email', email);
    else if (cellphone) user = await authService.findBy('cellphone', cellphone);
    if (!user) return res.status(404).json({ message: 'Invalid credentials' });

    const check = await authService.login(user, password);
    if (!check) return res.status(401).json({ message: 'Invalid credentials' });

    const token = await generateJWT(user.uid);
    return res.status(200).json({ user, token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signUp,
  signIn,
};
