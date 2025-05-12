// routes/auth.routes.js

const express = require('express');
const { login, register } = require('../controllers/auth.controller');
const { validateLogin, validateRegister } = require('../validators/auth.validator');
const { runValidation } = require('../middleware/validator');

const router = express.Router();

router.post('/register', validateRegister, runValidation, register);
router.post('/login', validateLogin, runValidation, login);

module.exports = router;
