const express = require('express');
const router = express.Router();
const {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} = require('../controllers/courseController');
const { protect, admin } = require('../middleware/authMiddleware');

// Public routes
router.get('/get', getCourses);
router.get('/:id', getCourseById);

// router.post('/', protect, admin, createCourse);
router.post('/', createCourse);

// router.put('/:id', protect, admin, updateCourse);
router.put('/:id', updateCourse);

// router.delete('/:id', protect, admin, deleteCourse);
router.delete('/:id', deleteCourse);


// Protected routes (admin only)
// router.post('/', protect, admin, createCourse);
// router.put('/:id', protect, admin, updateCourse);
// router.delete('/:id', protect, admin, deleteCourse);

module.exports = router;
