// app.js

import express from "express";

import bodyParser from "body-parser";

import cookieParser from "cookie-parser";

import cors from "cors";

import { connectDB } from "./config/db.js";

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests (for development)

app.use(cookieParser());

// Connect to MongoDB
connectDB(); // Call the connectDB function to establish the database connection

// Routes
import signupRoute from "./routes/signup.js";
import loginRoute from "./routes/login.js";
import logoutRoute from "./routes/logout.js";
import dashboardRoute from "./routes/dashboard.js";
import expenseRoute from "./routes/expenses.js";

app.use("/logout", logoutRoute);
app.use("/signup", signupRoute);
app.use("/login", loginRoute);
app.use("/dashboard", dashboardRoute);

app.use("/expense", expenseRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
