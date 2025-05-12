// models/StudentProfile.js

const mongoose = require('mongoose');

const studentProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  matricNumber: {
    type: String,
    required: true,
    unique: true,
  },
  department: String,
  program: String,
  level: String,
  phone: String,
  address: String,
  dob: Date,
  profilePic: String,
}, { timestamps: true });

module.exports = mongoose.model('StudentProfile', studentProfileSchema);
