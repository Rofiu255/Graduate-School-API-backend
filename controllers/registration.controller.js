// controllers/registration.controller.js

const RegistrationService = require('../services/registration.service');

exports.registerCourse = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;
    const registration = await RegistrationService.registerCourse(studentId, courseId);

    if (!registration) {
      return res.status(400).json({ message: 'Course registration failed' });
    }

    res.status(201).json({
      message: 'Course registered successfully',
      registration
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error, please try again' });
  }
};

exports.dropCourse = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;
    const result = await RegistrationService.dropCourse(studentId, courseId);

    if (!result) {
      return res.status(400).json({ message: 'Course drop failed' });
    }

    res.status(200).json({
      message: 'Course dropped successfully',
      result
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error, please try again' });
  }
};
