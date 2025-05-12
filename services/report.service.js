// services/report.service.js

const Fee = require('../models/Fee');  // Assuming Fee is a Mongoose model
const Result = require('../models/Result');  // Assuming Result is a Mongoose model

// Generate a fee report (summary of all fees)
exports.generateFeeReport = async () => {
  try {
    const fees = await Fee.aggregate([
      {
        $group: {
          _id: null,
          totalFees: { $sum: "$amount" },
          totalPaid: { $sum: "$amountPaid" },
          outstandingFees: { $sum: { $subtract: ["$amount", "$amountPaid"] } }
        }
      }
    ]);

    return fees[0];  // Return the fee summary
  } catch (err) {
    throw new Error('Failed to generate fee report');
  }
};

// Generate a student performance report
exports.generateStudentReport = async (studentId) => {
  try {
    const studentResults = await Result.find({ studentId });  // Fetch all results for the student
    if (!studentResults || studentResults.length === 0) {
      throw new Error('No results found for this student');
    }

    const performanceSummary = {
      studentId,
      totalMarks: studentResults.reduce((sum, result) => sum + result.marks, 0),
      averageMarks: studentResults.reduce((sum, result) => sum + result.marks, 0) / studentResults.length
    };

    return performanceSummary;
  } catch (err) {
    throw new Error('Failed to generate student report');
  }
};
