graduate-school-api/
├── config/
│   ├── db.js                # MongoDB connection
│   └── swagger.js           # Swagger configuration
│
├── controllers/
│   ├── auth.controller.js
│   ├── admission.controller.js
│   ├── student.controller.js
│   ├── course.controller.js
│   ├── registration.controller.js
│   ├── result.controller.js
│   ├── fee.controller.js
│   ├── notification.controller.js
│   └── report.controller.js
│
├── middleware/
│   ├── auth.js              # JWT and RBAC middleware
│   ├── rateLimiter.js       # Rate limiter
│   └── validator.js         # express-validator helper
│
├── models/
│   ├── User.js
│   ├── Application.js
│   ├── StudentProfile.js
│   ├── Course.js
│   ├── CourseRegistration.js
│   ├── Result.js
│   ├── Fee.js
│   └── Notification.js
│
├── routes/
│   ├── auth.routes.js
│   ├── admission.routes.js
│   ├── student.routes.js
│   ├── course.routes.js
│   ├── registration.routes.js
│   ├── result.routes.js
│   ├── fee.routes.js
│   ├── notification.routes.js
│   └── report.routes.js
│
├── test/
│   ├── auth.test.js
│   ├── admission.test.js
│   └── ...
│
├── utils/
│   ├── mailer.js
│   └── helpers.js
│
├── .env
├── .env.sample
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── index.js                # Main app entry point
├── package.json
├── swagger.json            # Swagger Docs
└── .github/
    └── workflows/
        └── ci.yml          # GitHub Actions CI/CD


✅ Core Packages

npm install express mongoose dotenv

✅ Authentication & Security

npm install jsonwebtoken bcryptjs express-rate-limit cors helmet

jsonwebtoken --->> JWT-based auth
bcryptjs --->> Password hashing
express-rate-limit --->> Basic rate limiting
cors --->> Enable Cross-Origin Resource Sharing
helmet --->> Secure HTTP headers

✅ Validation

npm install express-validator

express-validator --->> Request validation middleware


✅ Email Support

npm install nodemailer

nodemailer --->> Sending emails


✅ Swagger for API Docs

npm install swagger-ui-express

swagger-ui-express --->> Swagger UI integration



✅ Dev Dependencies (for development, testing, linting, etc.)

npm install --save-dev nodemon jest supertest eslint

nodemon --->> Auto-restarts server on code changes
jest --->> JavaScript testing framework
supertest --->> API endpoint testing
eslint --->> JavaScript linter