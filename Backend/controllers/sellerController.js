const SellerProfile = require("../models/SellerProfile");

const createSellerProfile = async (req, res) => {
  try {
    const {
      userId,
      fullName,
      profession,
      country,
      experience,
      skills,
      portfolio,
      linkedin,
      bio,
    } = req.user.id;

    if(
      !userId ||
      !fullName ||
      !profession ||
      !country ||
      !experience ||
      !skills ||
      !bio
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const profile = await SellerProfile.create({
      userId,
      fullName,
      profession,
      country,
      experience,
      skills,
      portfolio,
      linkedin,
      bio,
    });

    res.status(201).json({
      success: true,
      message: "Seller Profile Created Successfully",
      profile,
    });
  }
  catch (error){
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createSellerProfile,
};
