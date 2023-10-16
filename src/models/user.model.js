const { Schema, model } = require('mongoose');

const userSchema = Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    notNull: false,
    trim: true,
  },
  cellphone: {
    type: String,
    notNull: false,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  picture: {
    type: String,
  },
  online: {
    type: Boolean,
    default: false,
  },
  lastSeen: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.toJSON = function () {
  const { __v, _id, password, ...user } = this.toObject();
  user.uid = _id;
  user.username = user.email || user.cellphone;
  delete user.email;
  delete user.cellphone;

  return user;
};

module.exports = model('User', userSchema);
