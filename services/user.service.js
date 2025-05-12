// services/user.service.js

const bcrypt = require('bcryptjs');  // For hashing passwords
const jwt = require('jsonwebtoken');  // For creating JWT tokens
const User = require('../models/User');  // Assuming User is a Mongoose model

// Register a new user
exports.registerUser = async (data) => {
  try {
    const { email, password } = data;

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      email,
      password: hashedPassword,
      role: 'student',  // Default to student, can be adjusted based on requirements
    });

    return await user.save();  // Save the user in the database
  } catch (err) {
    throw new Error('Failed to register user');
  }
};

// Authenticate user and generate JWT
exports.authenticateUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    // Compare password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;  // Return the token for authentication
  } catch (err) {
    throw new Error('Failed to authenticate user');
  }
};

// Get user by ID
exports.getUserById = async (userId) => {
  try {
    return await User.findById(userId);  // Get user by ID
  } catch (err) {
    throw new Error('Failed to retrieve user');
  }
};
