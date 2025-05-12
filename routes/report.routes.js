// routes/report.routes.js

const express = require('express');
const {
  generateStudentReport,
  generateFinancialReport,
} = require('../controllers/report.controller');

const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/student/:studentId', authenticate, authorize('admin'), generateStudentReport);
router.get('/finance', authenticate, authorize('admin'), generateFinancialReport);

module.exports = router;
