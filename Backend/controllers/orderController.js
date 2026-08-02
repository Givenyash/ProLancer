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

            success:true,

            orders

        });


    }

    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};

// =============================
// Seller Orders
// =============================
const getSellerOrders = async (req, res) => {

};

// =============================
// Update Order Status
// =============================
const updateOrderStatus = async (req, res) => {

};

module.exports = {
    hireSeller,
    getBuyerOrders,
    getSellerOrders,
    updateOrderStatus
};