// test/admission.test.js

const request = require('supertest');
const app = require('../index'); // Your Express app
const mongoose = require('mongoose');
const Application = require('../models/Application');

describe('Admission Endpoints', () => {
  let token;

  beforeAll(async () => {
    // Optional: Clean up the database if running against a test DB
    await Application.deleteMany({});

    // Authenticate as admin (or seed one manually)
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'admin@example.com',
        password: 'adminpass',
      });

    token = res.body.token;
  });

  it('should submit a new application', async () => {
    const res = await request(app)
      .post('/api/admission/apply')
      .send({
        fullName: 'John Doe',
        email: 'john@example.com',
        program: 'Computer Science',
        academicBackground: 'B.Sc in Physics',
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('application');
    expect(res.body.application.fullName).toBe('John Doe');
  });

  it('should retrieve all applications (admin)', async () => {
    const res = await request(app)
      .get('/api/admission/applications')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should update application status (admin)', async () => {
    const applications = await Application.find({});
    const appId = applications[0]._id;

    const res = await request(app)
      .put(`/api/admission/applications/${appId}/status`)
      .set('Authorization', `Bearer ${token}`)
      .send({ status: 'approved' });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Application status updated');
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});
