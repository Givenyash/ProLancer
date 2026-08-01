const SellerProfile = require("../models/SellerProfile");

// ======================================
// Create Seller Profile
// ======================================

const createSellerProfile = async (req, res) => {
    try {

        // Data coming from frontend form
        const {
            fullName,
            profession,
            country,
            experience,
            skills,
            portfolio,
            linkedin,
            bio
        } = req.body;

        // User ID coming from JWT Middleware
        const userId = req.user.id;

        // Validation
        if (
            !fullName ||
            !profession ||
            !country ||
            !experience ||
            !skills ||
            !bio
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields."
            });
        }

        // Check if profile already exists
        const existingProfile = await SellerProfile.findOne({ userId });

        if (existingProfile) {
            return res.status(400).json({
                success: false,
                message: "Seller profile already exists."
            });
        }

        // Create Profile
        const profile = await SellerProfile.create({
            userId,
            fullName,
            profession,
            country,
            experience,
            skills,
            portfolio,
            linkedin,
            bio
        });

        res.status(201).json({
            success: true,
            message: "Seller Profile Created Successfully",
            profile
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    createSellerProfile
};