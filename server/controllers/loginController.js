import User from "../models/user";

/**
 * Controller function to handle user login.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email in the database
    const user = await User.findOne({ email });

    // If user not found, return error response
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check if password matches
    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    // If login successful, return success message and user data
    res.status(200).json({ message: "Login Successful", user });
  } catch (error) {
    // Handle any errors that occur during login process
    console.error("Encountered Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
