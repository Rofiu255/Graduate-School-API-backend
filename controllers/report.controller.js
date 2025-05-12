// controllers/report.controller.js

const ReportService = require('../services/report.service');  // Import Report service

// Generate a fee report
exports.generateFeeReport = async (req, res) => {
  try {
    const report = await ReportService.generateFeeReport();

    if (!report) {
      return res.status(404).json({ message: 'No fee report available' });
    }

    res.status(200).json({
      message: 'Fee report generated successfully',
      report
    });
  } catch (error) {
    res.status(500).json({ message: 'Error generating fee report', error: error.message });
  }
};

// Generate a student performance report
exports.generateStudentReport = async (req, res) => {
  try {
    const { studentId } = req.params;
    const report = await ReportService.generateStudentReport(studentId);

    if (!report) {
      return res.status(404).json({ message: 'No student report available' });
    }

    res.status(200).json({
      message: 'Student report generated successfully',
      report
    });
  } catch (error) {
    res.status(500).json({ message: 'Error generating student report', error: error.message });
  }
};
