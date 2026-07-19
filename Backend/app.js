// Import Packages
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const sellerRoutes = require("./routes/sellerRoutes");

// Load Environment Variables
dotenv.config();

// Connect Database
const connectDB = require("./config/db");
connectDB();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/seller", sellerRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Welcome to ProLancer Backend 🚀");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
