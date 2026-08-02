const mongoose = require("mongoose");

const gigSchema = new mongoose.Schema(
{
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    title: {
        type: String,
        required: true,
        trim: true
    },

    category: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    deliveryTime: {
        type: String,
        required: true
    }

},
{
    timestamps: true
}
);

module.exports = mongoose.model("Gig", gigSchema);