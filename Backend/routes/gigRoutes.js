const express = require("express");

const router = express.Router();

const {
    createGig,
    getAllGigs,
    getMyGigs,
    updateGig,
    deleteGig
} = require("../controllers/gigController");

const { verifyToken } = require("../middleware/authMiddleware");

// Create Gig
router.post("/", verifyToken, createGig);

// Public
router.get("/", getAllGigs);

// Seller
router.get("/my", verifyToken, getMyGigs);

// Update
router.put("/:id", verifyToken, updateGig);

// Delete
router.delete("/:id", verifyToken, deleteGig);

module.exports = router;