import mongoose from "mongoose";

// Define the expense schema
const expenseSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
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
  eId: {
    type: String,
    required: true,
    unique: true,
  },
});

// Define a model middleware to generate and set the eId before saving
expenseSchema.pre("save", async function (next) {
  try {
    // Get the user ID and date of the expense
    const userId = this.userId;
    const date = this.date.toISOString().split("T")[0]; // Extract YYYY-MM-DD from date

    // Count the number of expenses for the user on the current day
    const count = await this.constructor.countDocuments({
      userId: userId,
      date: {
        $gte: new Date(date),
        $lt: new Date(date + "T23:59:59.999Z"), // End of day
      },
    });

    // Set the eId with the formatted date and count
    this.eId = `${date}-${userId}_${count}`;

    next();
  } catch (error) {
    next(error);
  }
});

// Export the Expense model based on the schema
export default mongoose.model("Expense", expenseSchema);
