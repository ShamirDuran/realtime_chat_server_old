const { Schema, model } = require('mongoose');

const messageSchema = Schema({
  chat: {
    type: Schema.Types.ObjectId,
    ref: 'Chat',
    required: true,
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    text: {
      type: String,
      trim: true,
    },
    image: String,
  },
  contact: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  readBy: [
    {
      user: { type: Schema.Types.ObjectId, ref: 'User' },
      readAt: { type: Date },
    },
  ],
  forwared: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

messageSchema.methods.toJSON = function () {
  const { __v, _id, ...message } = this.toObject();
  message.uid = _id;
  return message;
};

module.exports = model('Message', messageSchema);
