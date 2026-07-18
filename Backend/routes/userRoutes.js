const express = require("express");

const router = express.Router();

const { registerUser } = require("../controllers/userController");

// Register User

router.post("/register", registerUser);

module.exports = router;