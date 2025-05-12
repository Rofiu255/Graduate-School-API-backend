// models/Course.js

const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  title: String,
  department: String,
  level: String,
  creditUnit: Number,
  semester: {
    type: String,
    enum: ['first', 'second'],
  },
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
