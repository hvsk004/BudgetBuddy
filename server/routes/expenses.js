import express from "express";

const router = express.Router();

import { getExpensesController } from "../controllers/expensesontroller.js";

router.get("/", getExpensesController);
