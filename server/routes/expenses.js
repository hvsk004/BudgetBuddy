import express from "express";

const router = express.Router();

import {
  getExpensesController,
  createExpenseController,
} from "../controllers/expensesontroller.js";

import { createExpense } from "../middlewares/createExpense.js";
import { protectRoute } from "../middlewares/jwtAuthentication.js";
import { deleteExpenseController } from "../controllers/deleteExpenseController.js";

router.get("/getExpenses", protectRoute, getExpensesController);

router.post(
  "/createExpense",
  protectRoute,
  createExpense,
  createExpenseController
);
router.post("/newExpense", protectRoute, createExpenseController);

router.put("/deleteExpense", protectRoute, deleteExpenseController);
export default router;
