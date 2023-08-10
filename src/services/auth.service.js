const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const findBy = async (field, value) => {
  return await User.findOne({ [field]: value });
};

const register = async (username, password, email, cellphone) => {
  const salt = bcrypt.genSaltSync();
  const hashedPassword = bcrypt.hashSync(password, salt);

  const user = await User.create({
    username,
    password: hashedPassword,
    email,
    cellphone,
  });
  return user;
};

const login = async (user, password) => {
  return bcrypt.compareSync(password, user.password);
};

module.exports = {
  findBy,
  register,
  login,
};
