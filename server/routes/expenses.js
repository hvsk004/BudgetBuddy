import express from "express";

const router = express.Router();

import {
  getExpensesController,
  createExpenseController,
} from "../controllers/expensesontroller.js";

import { createExpense } from "../middlewares/createExpense.js";
import { protectRoute } from "../middlewares/jwtAuthentication.js";

router.get("/getExpenses", getExpensesController);

router.post(
  "/createExpense",
  protectRoute,
  createExpense,
  createExpenseController
);

export default router;
