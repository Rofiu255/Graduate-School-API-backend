// services/registration.service.js

const Application = require('../models/Application');  // Assuming Application is a Mongoose model
const CourseRegistration = require('../models/CourseRegistration');  // Assuming CourseRegistration is a Mongoose model

// Register a new application
exports.registerApplication = async (data) => {
  try {
    const application = new Application(data);
    return await application.save();  // Save the application record
  } catch (err) {
    throw new Error('Failed to register application');
  }
};

// Register a student for a course
exports.registerForCourse = async (studentId, courseId) => {
  try {
    const courseRegistration = new CourseRegistration({ studentId, courseId });
    return await courseRegistration.save();  // Save the course registration record
  } catch (err) {
    throw new Error('Failed to register for course');
  }
};

// Get courses a student is registered for
exports.getStudentCourses = async (studentId) => {
  try {
    return await CourseRegistration.find({ studentId }).populate('courseId');  // Populate course details
  } catch (err) {
    throw new Error('Failed to get student courses');
  }
};
