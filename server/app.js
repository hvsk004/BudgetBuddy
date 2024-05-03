import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors"; // Import the cors middleware
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

// Configure CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    credentials: true, // Allow sending cookies with requests
  })
);

// Connect to MongoDB
connectDB();

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
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
