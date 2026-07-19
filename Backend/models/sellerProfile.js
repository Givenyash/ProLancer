const mongoose = require("mongoose");

const sellerProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    fullName: {
      type: String,
      required: true,
    },

    profession: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    skills: {
      type: String,
      required: true,
    },

    portfolio: {
      type: String,
    },

    linkedin: {
      type: String,
    },

    bio: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SellerProfile", sellerProfileSchema);