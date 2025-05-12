// routes/course.routes.js

const express = require('express');
const {
  createCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
} = require('../controllers/course.controller');

const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticate, authorize('admin'), createCourse);
router.get('/', authenticate, getAllCourses);
router.put('/:id', authenticate, authorize('admin'), updateCourse);
router.delete('/:id', authenticate, authorize('admin'), deleteCourse);

module.exports = router;
