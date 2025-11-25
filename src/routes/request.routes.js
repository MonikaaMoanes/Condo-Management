const express = require("express");
const router = express.Router();
const { authMiddleware, adminOnly } = require("../middleware/authMiddleware");
const {
  createRequest,
  getMyRequests,
  getAllRequests,
  updateRequestStatus,
  getRequestById
} = require("../controllers/request.controller");

// Resident
router.post("/", authMiddleware, createRequest);
router.get("/my", authMiddleware, getMyRequests);

// Admin
router.get("/", authMiddleware, adminOnly, getAllRequests);
router.get("/:id", authMiddleware, getRequestById);
router.put("/:id", authMiddleware, adminOnly, updateRequestStatus);

module.exports = router;
