const express = require('express');
const router = express.Router();
const {
  createTestimonial,
  getTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial
} = require('../controllers/testimonialController');
const { protect, admin } = require('../middleware/authMiddleware');

// Public
router.get('/get', getTestimonials);
router.get('/:id', protect, admin, getTestimonialById);

// Admin-only
// router.post('/', protect, admin, createTestimonial);
// router.put('/:id', protect, admin, updateTestimonial);
// router.delete('/:id', protect, admin, deleteTestimonial);

router.post('/',  protect, admin,createTestimonial);
router.put('/:id', protect, admin, updateTestimonial);
router.delete('/:id', protect, admin, deleteTestimonial);

module.exports = router;
