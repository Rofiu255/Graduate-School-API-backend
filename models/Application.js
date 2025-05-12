// models/Application.js

const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  program: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending',
  },
  documents: {
    type: [String], // URLs to uploaded documents
    default: [],
  },
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
