const User = require("../models/User");
const bcrypt = require("bcrypt");

// ============================
// Register User
// ============================

const registerUser = async (req, res) => {

    try {

        const { name, email, password, role } = req.body;

        // Check Empty Fields

        if (!name || !email || !password || !role) {

            return res.status(400).json({
                message: "All fields are required"
            });

        }

        // Check Existing User

        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({
                message: "Email already exists"
            });

        }

        // Encrypt Password

        const hashedPassword = await bcrypt.hash(password, 10);

        // Create User

        const user = await User.create({

            name,
            email,
            password: hashedPassword,
            role

        });

        res.status(201).json({

            success: true,

            message: "Registration Successful",

            user

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
    registerUser
};