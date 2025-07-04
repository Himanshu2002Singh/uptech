const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
// const helmet = require('helmet');
// const rateLimit = require('express-rate-limit');
const { errorHandler } = require('./middleware/errorMiddleware');

// Load .env
dotenv.config();

// DB Connection (Sequelize)
require('./config/db');

// Express init
const app = express();

// Security Middleware
app.use(helmet());

// Rate Limiting
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100 // limit each IP to 100 requests per windowMs
// });
// app.use(limiter);

// CORS Configuration
const corsOptions = {
  origin: [
    'https://www.uptechautomations.com',
    'https://uptechautomations.com',

  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers choke on 204
};

// Use CORS with options
app.use(cors(corsOptions));

// Explicitly handle OPTIONS requests
app.options('*', cors(corsOptions));

// Body Parsing Middleware
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Routes
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/team', require('./routes/teamRoutes'));
app.use('/api/testimonials', require('./routes/testimonialRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/mail', require('./routes/mailRoutes'));

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Error handling middleware
app.use(errorHandler);

// 404 Handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`Allowed Origins: ${corsOptions.origin.join(', ')}`);
});