const { request } = require('express');
const { generateJWT } = require('../utils/jwt.util');
const authService = require('../services/auth.service');

const register = async (req = request, res, next) => {
  try {
    const { fullname, password, email, cellphone } = req.body;

    const user = await authService.register(fullname, password, email, cellphone);
    const token = await generateJWT(user.uid);

    return res.status(201).json({ user, token });
  } catch (error) {
    next(error);
  }
};

const login = async (req = request, res, next) => {
  try {
    const { username, password } = req.body;
    let user = null;

    user = await authService.findBy('email', username); // Check if user exists by email
    if (!user) user = await authService.findBy('cellphone', username); // Check if user exists by cellphone
    if (!user) return res.status(404).json({ message: 'Invalid credentials' });

    const check = await authService.login(user, password);
    if (!check) return res.status(401).json({ message: 'Invalid credentials' });

    const token = await generateJWT(user.uid);

    // TODO: Remover timer
    await new Promise((res) => setTimeout(res, 1000));

    return res.status(200).json({ user, token });
  } catch (error) {
    next(error);
  }
};

const renewToken = async (req = request, res, next) => {
  try {
    const user = await authService.findBy('uid', req.uid);
    const token = await generateJWT(req.uid);

    return res.status(200).json({ user, token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  register,
  renewToken,
};
