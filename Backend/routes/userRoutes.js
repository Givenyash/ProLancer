const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
    getProfile
} = require("../controllers/userController");

const { verifyToken } = require("../middleware/authMiddleware");

// Register User
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", verifyToken, getProfile);

module.exports = router;