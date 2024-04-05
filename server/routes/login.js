// routes/login.js

import express from "express";

const router = express.Router();

import { authenticate } from "../middlewares/jwtAuthentication.js";

import { login } from "../controllers/loginController.js";

import { loginValidation } from "../middlewares/zodvaliation.js";

router.post("/", loginValidation, authenticate, login);

export default router;
