// routes/login.js

import express from "express";

const router = express.Router();

import { login } from "../controllers/loginController";

router.post("/", login);

module.exports = router;
