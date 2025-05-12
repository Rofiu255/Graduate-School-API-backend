// controllers/notification.controller.js

const NotificationService = require('../services/notification.service');  // Import Notification service

// Create a new notification
exports.createNotification = async (req, res) => {
  try {
    const { studentId, message } = req.body;
    const notification = await NotificationService.createNotification({ studentId, message });

    res.status(201).json({
      message: 'Notification sent successfully',
      notification
    });
  } catch (error) {
    res.status(500).json({ message: 'Error sending notification', error: error.message });
  }
};

// Get notifications for a student
exports.getNotifications = async (req, res) => {
  try {
    const { studentId } = req.params;
    const notifications = await NotificationService.getNotifications(studentId);

    if (!notifications || notifications.length === 0) {
      return res.status(404).json({ message: 'No notifications found for this student' });
    }

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving notifications', error: error.message });
  }
};

// Delete a notification
exports.deleteNotification = async (req, res) => {
  try {
    const { notificationId } = req.params;
    await NotificationService.deleteNotification(notificationId);

    res.status(200).json({
      message: 'Notification deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting notification', error: error.message });
  }
};
