// routes/student.routes.js

const express = require('express');
const {
  getProfile,
  updateProfile,
  getAllStudents,
} = require('../controllers/student.controller');

const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/me', authenticate, getProfile);
router.put('/me', authenticate, updateProfile);
router.get('/', authenticate, authorize('admin', 'superadmin'), getAllStudents);

module.exports = router;
