// services/course.service.js

const Course = require('../models/Course');  // Assuming Course is a Mongoose model

// Create a new course
exports.createCourse = async (data) => {
  try {
    const course = new Course(data);
    return await course.save();  // Save the course in the database
  } catch (err) {
    throw new Error('Failed to create course');
  }
};

// Get course details by ID
exports.getCourseDetails = async (courseId) => {
  try {
    return await Course.findById(courseId);  // Fetch course by ID
  } catch (err) {
    throw new Error('Failed to retrieve course details');
  }
};

// Get all courses
exports.getAllCourses = async () => {
  try {
    return await Course.find();  // Fetch all courses
  } catch (err) {
    throw new Error('Failed to retrieve courses');
  }
};
