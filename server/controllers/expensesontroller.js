import expense from "../models/expenses.js";

const getExpensesController = async (req, res) => {
  try {
    const expenses = await expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    console.error("Error in get expenses controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
