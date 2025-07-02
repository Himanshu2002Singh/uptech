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
router.get('/:id', getTeamMemberById);

// Admin-only protected
// router.post('/', protect, admin, createTeamMember);
// router.put('/:id', protect, admin, updateTeamMember);
// router.delete('/:id', protect, admin, deleteTeamMember);

router.post('/', createTeamMember);
router.put('/:id',  updateTeamMember);
router.delete('/:id', deleteTeamMember);

module.exports = router;
