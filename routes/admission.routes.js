// routes/admission.routes.js

const express = require('express');
const { apply, getAllApplications, updateApplicationStatus } = require('../controllers/admission.controller');
const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.post('/apply', apply);
router.get('/applications', authenticate, authorize('admin', 'superadmin'), getAllApplications);
router.put('/applications/:id/status', authenticate, authorize('admin', 'superadmin'), updateApplicationStatus);

module.exports = router;
