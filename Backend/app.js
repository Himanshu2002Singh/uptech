// app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware');

// Load .env
dotenv.config();

// DB Connection (Sequel
require('./config/db');

// Express init
const app = express();

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/team', require('./routes/teamRoutes'));
app.use('/api/testimonials', require('./routes/testimonialRoutes'));


app.use('/api/auth', require('./routes/authRoutes'));

// Add this with your other route imports
app.use('/api/mail', require('./routes/mailRoutes'));

// Error handling middleware
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
