const express = require("express");
const router = express.Router();
const { authMiddleware, adminOnly } = require("../middleware/authMiddleware");
const {
  createAnnouncement,
  getAnnouncements,
  deleteAnnouncement
} = require("../controllers/announcement.controller");

// Admin
router.post("/", authMiddleware, adminOnly, createAnnouncement);
router.delete("/:id", authMiddleware, adminOnly, deleteAnnouncement);

// All users
router.get("/", authMiddleware, getAnnouncements);

module.exports = router;
