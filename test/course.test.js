// test/course.test.js

const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');
const Course = require('../models/Course');

describe('Course Endpoints', () => {
  let token;
  let courseId;

  beforeAll(async () => {
    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'admin@example.com',
        password: 'adminpass',
      });

    token = loginRes.body.token;
  });

  it('should create a new course', async () => {
    const res = await request(app)
      .post('/api/courses')
      .set('Authorization', `Bearer ${token}`)
      .send({
        code: 'CSC701',
        title: 'Advanced Algorithms',
        unit: 3,
        level: 1,
        semester: 'First',
        department: 'Computer Science',
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('course');
    courseId = res.body.course._id;
  });

  it('should get all courses', async () => {
    const res = await request(app)
      .get('/api/courses')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should get a single course', async () => {
    const res = await request(app)
      .get(`/api/courses/${courseId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('course');
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});
