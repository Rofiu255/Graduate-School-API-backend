// models/Fee.js

const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StudentProfile',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  feeType: {
    type: String,
    enum: ['tuition', 'hostel', 'library', 'others'],
    default: 'tuition',
  },
  session: String,
  status: {
    type: String,
    enum: ['paid', 'pending', 'failed'],
    default: 'pending',
  },
  reference: String, // Transaction ID
  paymentDate: Date,
}, { timestamps: true });

module.exports = mongoose.model('Fee', feeSchema);
