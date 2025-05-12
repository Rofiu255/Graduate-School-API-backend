// controllers/result.controller.js

const ResultService = require('../services/result.service');

exports.uploadResult = async (req, res) => {
  try {
    const { studentId, courseId, grade } = req.body;
    const result = await ResultService.uploadResult(studentId, courseId, grade);

    if (!result) {
      return res.status(400).json({ message: 'Result upload failed' });
    }

    res.status(201).json({
      message: 'Result uploaded successfully',
      result
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error, please try again' });
  }
};

exports.getResult = async (req, res) => {
  try {
    const { studentId, courseId } = req.params;
    const result = await ResultService.getResult(studentId, courseId);

    if (!result) {
      return res.status(404).json({ message: 'Result not found' });
    }

    res.status(200).json({
      message: 'Result retrieved successfully',
      result
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error, please try again' });
  }
};
