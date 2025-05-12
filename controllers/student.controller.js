// controllers/student.controller.js

const StudentService = require('../services/student.service');

exports.createStudentProfile = async (req, res) => {
  try {
    const { name, program, email, phoneNumber } = req.body;
    const studentProfile = await StudentService.createProfile({ name, program, email, phoneNumber });

    res.status(201).json({
      message: 'Student profile created successfully',
      studentProfile
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error, please try again' });
  }
};

exports.updateStudentProfile = async (req, res) => {
  try {
    const { studentId } = req.params;
    const updateData = req.body;

    const updatedProfile = await StudentService.updateProfile(studentId, updateData);

    if (!updatedProfile) {
      return res.status(404).json({ message: 'Student profile not found' });
    }

    res.status(200).json({
      message: 'Student profile updated successfully',
      updatedProfile
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error, please try again' });
  }
};

exports.getStudentProfile = async (req, res) => {
  try {
    const { studentId } = req.params;
    const studentProfile = await StudentService.getProfileById(studentId);

    if (!studentProfile) {
      return res.status(404).json({ message: 'Student profile not found' });
    }

    res.status(200).json({
      message: 'Student profile retrieved successfully',
      studentProfile
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error, please try again' });
  }
};
