// routes/registration.routes.js

const express = require('express');
const {
  registerCourses,
  getRegistrations,
  getMyRegistrations,
} = require('../controllers/registration.controller');

const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticate, authorize('student'), registerCourses);
router.get('/', authenticate, authorize('admin'), getRegistrations);
router.get('/me', authenticate, authorize('student'), getMyRegistrations);

module.exports = router;
