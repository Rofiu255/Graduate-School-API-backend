// controllers/course.controller.js

const CourseService = require('../services/course.service');

exports.createCourse = async (req, res) => {
  try {
    const { name, department, credits, description } = req.body;
    const newCourse = await CourseService.createCourse({ name, department, credits, description });

    res.status(201).json({
      message: 'Course created successfully',
      course: newCourse
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error, please try again' });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const updateData = req.body;

    const updatedCourse = await CourseService.updateCourse(courseId, updateData);

    if (!updatedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json({
      message: 'Course updated successfully',
      updatedCourse
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error, please try again' });
  }
};

exports.getCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await CourseService.getCourseById(courseId);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json({
      message: 'Course retrieved successfully',
      course
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error, please try again' });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await CourseService.getAllCourses();

    res.status(200).json({
      message: 'Courses retrieved successfully',
      courses
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error, please try again' });
  }
};
