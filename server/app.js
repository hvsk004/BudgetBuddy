// app.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db"); // Import the connectDB function
// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests (for development)

// Connect to MongoDB
connectDB(); // Call the connectDB function to establish the database connection

// Routes
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
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
