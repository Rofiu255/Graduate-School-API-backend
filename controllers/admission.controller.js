// controllers/admission.controller.js

const AdmissionService = require('../services/admission.service');

exports.createApplication = async (req, res) => {
  try {
    const { studentId, program, documents } = req.body;
    const application = await AdmissionService.createApplication({ studentId, program, documents });

    res.status(201).json({
      message: 'Application submitted successfully',
      application
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error, please try again' });
  }
};

exports.getApplicationStatus = async (req, res) => {
  try {
    const { applicationId } = req.params;
    const application = await AdmissionService.getApplicationById(applicationId);

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    res.status(200).json({
      message: 'Application retrieved successfully',
      application
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error, please try again' });
  }
};
