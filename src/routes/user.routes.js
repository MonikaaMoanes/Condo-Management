const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/authMiddleware");
const { checkRole } = require("../middleware/roleMiddleware");
const { getMyProfile, getAllUsers } = require("../controllers/user.controller");

// Current user
router.get("/me", authMiddleware, getMyProfile);

// Admin only
router.get("/", authMiddleware, checkRole('admin'), getAllUsers);

module.exports = router;

