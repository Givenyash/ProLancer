const Gig = require("../models/Gig");

// =============================
// Create Gig
// =============================

const createGig = async (req, res) => {
    try {

        const {
            title,
            category,
            description,
            price,
            deliveryTime
        } = req.body;

        if (
            !title ||
            !category ||
            !description ||
            !price ||
            !deliveryTime
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            });
        }

        const gig = await Gig.create({
            sellerId: req.user.id,
            title,
            category,
            description,
            price,
            deliveryTime
        });

        res.status(201).json({
            success: true,
            message: "Gig Created Successfully",
            gig
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// =============================
// Get All Gigs
// =============================

const getAllGigs = async (req, res) => {

    try {

        const gigs = await Gig.find().populate(
            "sellerId",
            "name email"
        );

        res.json({
            success: true,
            gigs
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    createGig,
    getAllGigs
};