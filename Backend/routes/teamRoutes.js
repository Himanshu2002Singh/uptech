const express = require('express');
const router = express.Router();
const {
  createTeamMember,
  getTeamMembers,
  getTeamMemberById,
  updateTeamMember,
  deleteTeamMember
} = require('../controllers/teamController');
const { protect, admin } = require('../middleware/authMiddleware');

// Public
router.get('/get', getTeamMembers);
router.get('/:id', protect, admin, getTeamMemberById);

// Admin-only protected
// router.post('/', protect, admin, createTeamMember);
// router.put('/:id', protect, admin, updateTeamMember);
// router.delete('/:id', protect, admin, deleteTeamMember);

router.post('/',  protect, admin,createTeamMember);
router.put('/:id', protect, admin, updateTeamMember);
router.delete('/:id', protect, admin, deleteTeamMember);

module.exports = router;
