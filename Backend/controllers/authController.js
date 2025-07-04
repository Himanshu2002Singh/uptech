const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  
  const user = await User.findOne({ where: { email } });
  
  if (user && (await user.validPassword(password))) {
    const token = jwt.sign(
      { id: user.id, is_admin: user.is_admin }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );
    
    res.json({ 
      token, 
      user: { 
        id: user.id, 
        name: user.name, 
        email: user.email, 
        is_admin: user.is_admin 
      } 
    });
  } else {
    res.status(401);
    throw new Error('Invalid credentials');
  }
});

exports.forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  res.json({
    message: 'Please contact support at support@trustingbrains.com to reset your password.'
  });
});