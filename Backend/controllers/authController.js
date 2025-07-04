const users = require('../models/user');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const result = await users.query('SELECT * FROM users WHERE email = $1', [email]);
  const user = result.rows[0];
  if (user && password === user.password) {
    const token = jwt.sign({ id: user.id, is_admin: user.is_admin }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email, is_admin: user.is_admin } });
  } else {
    res.status(401);
    throw new Error('Invalid credentials');
  }
});

exports.forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  // We don't send reset tokens here — direct to support
  res.json({
    message: 'Please contact support at support@trustingbrains.com to reset your password.'
  });
});
