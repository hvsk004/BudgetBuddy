// routes/login.js

import express from "express";

const router = express.Router();

import { authenticate } from "../middlewares/jwtAuthentication.js";

import { login } from "../controllers/loginController.js";

router.post("/", authenticate, login);

export default router;
