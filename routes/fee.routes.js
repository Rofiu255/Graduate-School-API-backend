// routes/fee.routes.js

const express = require('express');
const {
  payFee,
  getMyFees,
  getAllFees,
} = require('../controllers/fee.controller');

const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.post('/pay', authenticate, authorize('student'), payFee);
router.get('/me', authenticate, authorize('student'), getMyFees);
router.get('/', authenticate, authorize('admin'), getAllFees);

module.exports = router;
