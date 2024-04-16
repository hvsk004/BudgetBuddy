import expense from "../models/expensesModel.js";

export const getExpensesController = async (req, res) => {
  try {
    const userId = req.body.userId;
    console.log("userID:(getting expenses) " + userId);
    const expenses = await expense.find({ userId: userId });
    res.status(200).json({ expenses: expenses });
  } catch (error) {
    console.error("Error in get expenses controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createExpenseController = async (req, res) => {
  console.log("Control reached the Main Controller");
  console.log("Request Body:", req.body);
  const { userId, amount, date, category, description } = req.body;

  const newExpense = new expense({
    userId,
    amount,
    date,
    category,
    description,
  });
  try {
    await newExpense.save();
    console.log("Expense added successfully");
    res
      .status(201)
      .json({ expense: newExpense, message: "Expense added successfully" });
  } catch (error) {
    console.error("Error in create expenses controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
