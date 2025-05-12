// models/Notification.js

const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: String,
  message: String,
  read: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    enum: ['info', 'alert', 'success', 'warning'],
    default: 'info',
  },
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);
