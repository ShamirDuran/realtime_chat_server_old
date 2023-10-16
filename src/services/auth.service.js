const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const findById = async (uid) => {
  return await User.findById(uid);
};

const findBy = async (field, value) => {
  return await User.findOne({ [field]: value });
};

const register = async (fullname, password, email, cellphone) => {
  const salt = bcrypt.genSaltSync();
  const hashedPassword = bcrypt.hashSync(password, salt);

  const user = await User.create({
    fullname,
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
  findById,
  register,
  login,
};
