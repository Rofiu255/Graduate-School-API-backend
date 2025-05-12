// routes/notification.routes.js

const express = require('express');
const {
  createNotification,
  getNotificationsForUser,
  markAsRead,
} = require('../controllers/notification.controller');

const { authenticate } = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticate, createNotification);
router.get('/', authenticate, getNotificationsForUser);
router.patch('/:id/read', authenticate, markAsRead);

module.exports = router;
