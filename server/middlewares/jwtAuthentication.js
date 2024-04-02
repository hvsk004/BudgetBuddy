import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

const jwtSecretKey = process.env.JWT_SECRET_KEY;

//Function that creates the jwt
function signToken(payload) {
  const token = jwt.sign(payload, jwtSecretKey, { expiresIn: "1w" });
  return token;
}

//Function to verify jwt
function verifyToken(token) {
  try {
    const response = jwt.verify(token, jwtSecretKey);
    return response;
  } catch (error) {
    return null;
  }
}

module.exports = { signToken, verifyToken };
