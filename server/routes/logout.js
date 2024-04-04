import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  // Clear the JWT from cookies
  res.clearCookie("jwt");

  // Redirect to the login page
  res.json({ message: "Logout Successful" });
});

export default router;
