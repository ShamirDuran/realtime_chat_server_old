const { Schema } = require('mongoose');

const chatSchema = Schema({
  activeUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  ],
  inactiveUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  ],
  adminUsers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  ],
  lastMessage: {
    type: Schema.Types.ObjectId,
    ref: 'Message',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // True if it's a group chat
  group: {
    type: Boolean,
    default: false,
  },
  // Only for group chats
  groupName: {
    type: String,
    trim: true,
  },
  groupDescription: {
    type: String,
    trim: true,
  },
  // Only for group chats
  picture: {
    type: String,
  },
});

chatSchema.methods.toJSON = function () {
  const { __v, _id, ...chat } = this.toObject();
  chat.uid = _id;
  return chat;
};

module.exports = model('Chat', chatSchema);
