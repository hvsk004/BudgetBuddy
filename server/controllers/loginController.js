import { User } from "../models/userModel.js";

import { signToken } from "../middlewares/jwtAuthentication.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const jwtPayload = {
      userId: user.userId,
      name: user.name,
      email: user.email,
    };

    const token = signToken(jwtPayload);

    res.cookie("jwt", token, {
      httpOnly: true, // Cookie cannot be accessed via client-side scripts
      secure: true, // Cookie will only be sent over HTTPS
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Expires in 1 week
      sameSite: "strict", // Cookie will only be sent on requests to the same site
    });

    res.status(200).json({ message: "Login Successful" });
  } catch (error) {
    // Handle any errors that occur during login process
    console.error("Encountered Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
