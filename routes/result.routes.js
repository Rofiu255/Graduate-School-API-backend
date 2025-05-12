// routes/result.routes.js

const express = require('express');
const {
  uploadResult,
  getResultsByStudent,
  getMyResults,
} = require('../controllers/result.controller');

const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticate, authorize('admin'), uploadResult);
router.get('/student/:studentId', authenticate, authorize('admin'), getResultsByStudent);
router.get('/me', authenticate, authorize('student'), getMyResults);

module.exports = router;
