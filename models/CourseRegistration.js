// models/CourseRegistration.js

const mongoose = require('mongoose');

const courseRegistrationSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StudentProfile',
    required: true,
  },
  session: String,
  semester: {
    type: String,
    enum: ['first', 'second'],
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  }],
}, { timestamps: true });

module.exports = mongoose.model('CourseRegistration', courseRegistrationSchema);
