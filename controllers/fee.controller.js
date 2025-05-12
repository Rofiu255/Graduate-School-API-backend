// controllers/fee.controller.js

const FeeService = require('../services/fee.service');  // Import the Fee service

// Create a new fee record
exports.createFeeRecord = async (req, res) => {
  try {
    const { studentId, amount, dueDate } = req.body;
    const feeRecord = await FeeService.createFeeRecord({ studentId, amount, dueDate });

    res.status(201).json({
      message: 'Fee record created successfully',
      feeRecord
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating fee record', error: error.message });
  }
};

// Get fee details by student ID
exports.getFeeDetails = async (req, res) => {
  try {
    const { studentId } = req.params;
    const feeDetails = await FeeService.getFeeDetails(studentId);

    if (!feeDetails || feeDetails.length === 0) {
      return res.status(404).json({ message: 'No fee records found for this student' });
    }

    res.status(200).json(feeDetails);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving fee details', error: error.message });
  }
};

// Process fee payment
exports.payFee = async (req, res) => {
  try {
    const { studentId, amount } = req.body;
    const updatedFee = await FeeService.payFee(studentId, amount);

    res.status(200).json({
      message: 'Fee payment successful',
      updatedFee
    });
  } catch (error) {
    res.status(500).json({ message: 'Error processing fee payment', error: error.message });
  }
};
