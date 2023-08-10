const { Schema, model } = require('mongoose');

const userSchema = Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    notNull: false,
    trim: true,
  },
  cellphone: {
    type: String,
    unique: true,
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
  return user;
};

module.exports = model('User', userSchema);
