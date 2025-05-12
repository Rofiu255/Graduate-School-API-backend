// services/fee.service.js

const Fee = require('../models/Fee');  // Assuming Fee is a Mongoose model

// Business logic to create a fee record
exports.createFeeRecord = async (data) => {
  try {
    const feeRecord = new Fee(data);
    return await feeRecord.save();  // Save the fee record in the database
  } catch (err) {
    throw new Error('Failed to create fee record');
  }
};

// Business logic to get fee details for a student
exports.getFeeDetails = async (studentId) => {
  try {
    return await Fee.find({ studentId });
  } catch (err) {
    throw new Error('Failed to retrieve fee details');
  }
};

// Business logic to pay fees
exports.payFee = async (studentId, amount) => {
  try {
    const fee = await Fee.findOne({ studentId });
    if (!fee) {
      throw new Error('Fee record not found');
    }

    fee.amountPaid += amount;  // Assume there's an `amountPaid` field in the Fee model
    return await fee.save();
  } catch (err) {
    throw new Error('Failed to process fee payment');
  }
};
