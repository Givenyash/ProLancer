const Order = require("../models/Order");
const Gig = require("../models/Gig");

// =============================
// Hire Seller
// =============================
const hireSeller = async (req, res) => {

    try {

        const { gigId } = req.body;

        if (!gigId) {
            return res.status(400).json({
                success: false,
                message: "Gig ID is required"
            });
        }

        const gig = await Gig.findById(gigId);

        if (!gig) {
            return res.status(404).json({
                success: false,
                message: "Gig Not Found"
            });
        }

        if (gig.sellerId.toString() === req.user.id) {
            return res.status(400).json({
                success: false,
                message: "You cannot hire your own gig."
            });
        }

        const existingOrder = await Order.findOne({
            buyerId: req.user.id,
            gigId: gig._id,
            status: "Pending"
        });

        if (existingOrder) {
            return res.status(400).json({
                success: false,
                message: "You have already hired this seller."
            });
        }

        const order = await Order.create({

            buyerId: req.user.id,

            sellerId: gig.sellerId,

            gigId: gig._id,

            price: gig.price

        });

        res.status(201).json({

            success: true,

            message: "Seller Hired Successfully",

            order

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// Buyer Orders
const getBuyerOrders = async (req, res) => {

    try {

        const orders = await Order.find({
            buyerId: req.user.id
        })
            .populate("gigId", "title price deliveryTime")
            .populate("sellerId", "name email");


        res.json({

            success: true,

            orders

        });


    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// =============================
// Seller Orders
// =============================
const getSellerOrders = async (req, res) => {

    try {

        const orders = await Order.find({

            sellerId: req.user.id

        })

            .populate("buyerId", "name email")

            .populate("gigId", "title");

        res.json({

            success: true,

            orders

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// =============================
// Update Order Status
// =============================
const updateOrderStatus = async (req, res) => {

    try {

        const order = await Order.findById(req.params.id);

        if (!order) {

            return res.status(404).json({

                success: false,

                message: "Order Not Found"

            });

        }

        if (order.sellerId.toString() !== req.user.id) {

            return res.status(403).json({

                success: false,

                message: "Unauthorized"

            });

        }

        order.status = req.body.status;

        await order.save();

        res.json({

            success: true,

            message: "Status Updated"

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// =============================
// Seller Dashboard Statistics
// =============================

const getSellerStats = async (req, res) => {

    try {

        const totalGigs = await Gig.countDocuments({

            sellerId: req.user.id

        });

        const completedOrders = await Order.countDocuments({

            sellerId: req.user.id,

            status: "Completed"

        });

        const pendingOrders = await Order.countDocuments({

            sellerId: req.user.id,

            status: "Pending"

        });

        res.json({

            success: true,

            totalGigs,

            completedOrders,

            pendingOrders

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {
    hireSeller,
    getBuyerOrders,
    getSellerOrders,
    updateOrderStatus,
    getSellerStats
};