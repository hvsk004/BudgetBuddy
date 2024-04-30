import faker from "faker";
import mongoose from "mongoose";
import expense from "./models/expensesModel"; // Import your Expense model

mongoose.connect("mongodb://localhost:27017/your_database_name", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const categories = [
  "Clothing",
  "Food",
  "Food and Beverages",
  "Consumer Goods",
  "Electronics",
];

const generateRandomExpense = () => {
  return {
    amount: faker.random.number({ min: 10, max: 10000 }),
    date: faker.date.past(),
    category: faker.random.arrayElement(categories),
    description: faker.lorem.sentence(),
    eId: faker.random.uuid(),
  };
};

const generateExpenses = async (numExpenses) => {
  const expenses = [];
  for (let i = 0; i < numExpenses; i++) {
    expenses.push(generateRandomExpense());
  }
  // await expense.insertMany(expenses);
  console.log(`${numExpenses} expenses generated successfully.`);
  mongoose.disconnect();
};

generateExpenses(10); // Change the number to generate more or fewer expenses
