const express = require("express");
const router = express.Router();

const { createSellerProfile } = require("../controllers/sellerController");
const verifyToken = require("../middleware/authMiddleware");
router.post("/profile", verifyToken, createSellerProfile);

module.exports = router;

// Now every request to:
// POST /api/seller/profile
// must include a valid JWT.
