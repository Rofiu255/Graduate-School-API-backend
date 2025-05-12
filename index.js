const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const rateLimiter = require('./middleware/rateLimiter');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(rateLimiter);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/admission', require('./routes/admission.routes'));
app.use('/api/students', require('./routes/student.routes'));
app.use('/api/courses', require('./routes/course.routes'));
app.use('/api/registration', require('./routes/registration.routes'));
app.use('/api/results', require('./routes/result.routes'));
app.use('/api/fees', require('./routes/fee.routes'));
app.use('/api/notifications', require('./routes/notification.routes'));
app.use('/api/reports', require('./routes/report.routes'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
