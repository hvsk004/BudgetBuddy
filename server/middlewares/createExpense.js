import axios from "axios";

export const createExpense = async (req, res, next) => {
  const expenseStatement = req.body.expense;
  axios
    .post(
      "http://localhost:8001/v1/completions",
      {
        prompt: expenseStatement,
        system_prompt:
          'From the given sentence, extract the amount spent and the category it was spent on, and return output in JSON. The output should be in the following format: {"amount": [amount], "category": [category], "description": [a simple sentence describing the transaction]}. If the given information is not sufficent to extract the amount and category, return an error message. in json as {"error": "Insufficient information to extract amount and category"}.',
        stream: false,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log(response.data.choices[0].message.content);
      const expense = JSON.parse(response.data.choices[0].message.content);
      if (expense.error) {
        return res.status(400).json({
          message: "Error in creating expense, Insufficent Information",
        });
      }
      const finalExpense = {
        userId: req.body.userId,
        amount: expense.amount,
        date: new Date(),
        category: expense.category,
        description: expense.description,
      };
      console.log("Final expense:", finalExpense);
      console.log("Passing Control to Main controller...");
      req.body = finalExpense;
      next();
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(400).json({ message: "Error in creating expense" });
    });
};
