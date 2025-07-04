const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const pool = require('../config/db');

const protect = asyncHandler(async (req, res, next) => {
  console.log('Headers:', req.headers); // Debug log
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      console.log('Token received:', token); // Debug log

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('Decoded token:', decoded); // Debug log

      const user = await pool.query('SELECT * FROM users WHERE id = $1', [decoded.id]);
      console.log('User found:', user.rows[0]); // Debug log

      if (user.rows.length === 0) {
        console.log('User not found in database'); // Debug log
        res.status(401);
        throw new Error('User not found');
      }

      req.user = user.rows[0];
      next();
    } catch (error) {
      console.error('Auth error:', error.message); // More detailed error
      res.status(401);
      throw new Error('Not authorized: ' + error.message);
    }
  }

  if (!token) {
    console.log('No token provided'); // Debug log
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

const admin = (req, res, next) => {
  console.log('Admin check - user:', req.user); // Debug log
  if (req.user && req.user.is_admin) {
    next();
  } else {
    console.log('Admin check failed'); // Debug log
    res.status(403);
    throw new Error(`Not authorized as admin. User admin status: ${req.user?.is_admin}`);
  }
};

module.exports = { protect, admin };