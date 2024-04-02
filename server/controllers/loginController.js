const User = require("../models/user");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    res.status(200).json({ message: "Login Successful", user });
  } catch (error) {
    console.error("Encountered Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
