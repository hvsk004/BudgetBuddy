// app.js

import express from "express";

import bodyParser from "body-parser";

import cors from "cors";

import connectDB from "./config/db";

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests (for development)

// Connect to MongoDB
connectDB(); // Call the connectDB function to establish the database connection

// Routes
import signupRoute from "./routes/signup";

import loginRoute from "./routes/login";

app.use("/signup", signupRoute);
app.use("/login", loginRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
