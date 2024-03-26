const mongoose = require("mongoose");

// Define the expense schema
const expenseSchema = new mongoose.Schema({
  eId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Export the Expense model based on the schema
module.exports = mongoose.model("Expense", expenseSchema);
