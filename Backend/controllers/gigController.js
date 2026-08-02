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

        const existingGig = await Gig.findOne({

            sellerId: req.user.id,

            title: title.trim()

        });

        if (existingGig) {

            return res.status(400).json({

                success: false,

                message: "You already have a gig with this title."

            });

        }

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

// Get My Gigs
const getMyGigs = async (req, res) => {

    try {

        const gigs = await Gig.find({
            sellerId: req.user.id
        });

        res.json({
            success: true,
            gigs
        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// Get Single Gig
const getSingleGig = async (req, res) => {

    try {

        const gig = await Gig.findById(req.params.id)
            .populate("sellerId", "name email");

        if (!gig) {

            return res.status(404).json({
                success: false,
                message: "Gig Not Found"
            });

        }

        res.json({
            success: true,
            gig
        });

    }

    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

//Update Gigs
const updateGig = async (req, res) => {

    try {

        const gig = await Gig.findById(req.params.id);

        if (!gig) {

            return res.status(404).json({

                success: false,

                message: "Gig Not Found"

            });

        }

        if (gig.sellerId.toString() !== req.user.id) {

            return res.status(403).json({

                success: false,

                message: "Unauthorized"

            });

        }

        const updatedGig = await Gig.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true
            }

        );

        res.json({

            success: true,

            message: "Gig Updated",

            updatedGig

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// Delete Gigs
const deleteGig = async (req, res) => {

    try {

        const gig = await Gig.findById(req.params.id);

        if (!gig) {

            return res.status(404).json({

                success: false,

                message: "Gig Not Found"

            });

        }

        if (gig.sellerId.toString() !== req.user.id) {

            return res.status(403).json({

                success: false,

                message: "Unauthorized"

            });

        }

        await Gig.findByIdAndDelete(req.params.id);

        res.json({

            success: true,

            message: "Gig Deleted"

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
// Top Featured Freelancers
// =============================
const getFeaturedFreelancers = async (req, res) => {

    try {

        const featured = await Gig.aggregate([

            {
                $group: {
                    _id: "$sellerId",
                    totalGigs: { $sum: 1 },
                    category: { $first: "$category" },
                    price: { $first: "$price" }
                }
            },

            {
                $sort: {
                    totalGigs: -1
                }
            },

            {
                $limit: 3
            }

        ]);

        await Gig.populate(featured, {
            path: "_id",
            select: "name email"
        });

        res.json({
            success: true,
            freelancers: featured
        });

    }

    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

};

module.exports = {
    createGig,
    getAllGigs,
    getMyGigs,
    getSingleGig,
    updateGig,
    deleteGig,
    getFeaturedFreelancers
};