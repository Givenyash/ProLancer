const express = require("express");
const router = express.Router();

const {
    createGig,
    getAllGigs
} = require("../controllers/gigController");

const {
    verifyToken
} = require("../middleware/authMiddleware");

// Seller creates Gig
router.post("/", verifyToken, createGig);

// Everyone can see Gigs
router.get("/", getAllGigs);

module.exports = router;