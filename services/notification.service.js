// services/notification.service.js

const Notification = require('../models/Notification');  // Assuming Notification is a Mongoose model

// Create a new notification
exports.createNotification = async (data) => {
  try {
    const notification = new Notification(data);
    return await notification.save();  // Save the notification in the database
  } catch (err) {
    throw new Error('Failed to create notification');
  }
};

// Get notifications for a specific student
exports.getNotifications = async (studentId) => {
  try {
    return await Notification.find({ studentId });  // Get notifications for the student
  } catch (err) {
    throw new Error('Failed to retrieve notifications');
  }
};

// Delete a notification by ID
exports.deleteNotification = async (notificationId) => {
  try {
    const result = await Notification.findByIdAndDelete(notificationId);  // Delete notification
    if (!result) {
      throw new Error('Notification not found');
    }
    return result;
  } catch (err) {
    throw new Error('Failed to delete notification');
  }
};
