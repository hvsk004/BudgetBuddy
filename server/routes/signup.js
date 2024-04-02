import express from "express";

const router = express.Router();

import { signup } from "../controllers/signupController";

router.post("/", signup);

module.exports = router;
