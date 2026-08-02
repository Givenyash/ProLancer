const express = require("express");

const router = express.Router();

const {
    hireSeller,
    getBuyerOrders,
    getSellerOrders,
    updateOrderStatus,
    getSellerStats
} = require("../controllers/orderController");

const { verifyToken } = require("../middleware/authMiddleware");

// Hire Seller
router.post("/", verifyToken, hireSeller);

// Buyer's Orders
router.get("/buyer", verifyToken, getBuyerOrders);

// Seller's Orders
router.get("/seller", verifyToken, getSellerOrders);

// Update Status
router.put("/:id", verifyToken, updateOrderStatus);
// seller stats
router.get("/seller/stats", verifyToken, getSellerStats);

module.exports = router;