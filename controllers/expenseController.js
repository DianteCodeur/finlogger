import mongoose from 'mongoose';
import Expense from '../models/expense.js';
import ExpenseCategory from '../models/expenseCategory.js';

//createExpense() function

export const createExpense = (req, res) => {

    //Extract fields from the request body

    const { user_id, description, amount, date, categoryName } = req.body;

    // Find the expense category by name

    ExpenseCategory.findOne({ name: categoryName })

    .then(category => {

        //If category do not exist then return 400 status code with error message

        if (!category) {

        return res.status(400).json({ error: 'Category not found.' });

        }

        // Create a new expense

        return Expense.create({

        user_id,

        description,

        amount,

        date,

        category_id: category._id

        });

    })

    .then(expense => {

            //If expense_id exists then return status code 201 with message

            if(expense._id){

                res.status(201).json({ id: expense._id, message: "Expense created successfully." })

        }
    
    })

    .catch(error => {

        //Check if error is Validation error

        if (error.name === 'ValidationError') {

            //Return status code 400

            res.status(400).json({ error: 'Validation failed.' });

        } else {

            //Return status code 500 with error message

            console.error("Error creating expense:", error);

            res.status(500).json({ error: "Server error." });

        }

    });

};

//updateExpense() function

export const updateExpense = (req, res) => {

    const { description, amount, date, categoryName } = req.body;

    // Find the category by name

    ExpenseCategory.findOne({ name: categoryName })

    .then(category => {

    //If category do not exist then return status code 400 with error message

    if (!category) {

        return res.status(400).json({ error: 'Category not found.' });

    }

    // Find and update the expense

    return Expense.findByIdAndUpdate(
        req.params.id,
        {
        description,
        amount,
        date,
        category_id: category._id,
        active: true
        },
        { new: true } // Return the updated document
    );

    })

    .then(updatedExpense => {

    //If updated expense does not exist the return status code 404 with error message 

    if (!updatedExpense) {

        return res.status(404).json({ error: 'Expense not found.' });

    }

    //return status code 200 with message

    res.status(200).json({ message: "Expense updated successfully." });

    })

    .catch(error => {

    //return status code 500 with error message

    console.error("Error updating expense:", error);

    res.status(500).json({ error: "Server error." });

    });

};

//deleteExpense() function

export const deleteExpense = async (req, res) => {

  try {

    const { id } = req.params;

    // Soft delete by setting active to false

    const updated = await Expense.findByIdAndUpdate(
      id,
      { $set: { active: false } },
      { new: true }
    );

    // If no expense was found, return 404

    if (!updated) {
      return res.status(404).json({ message: "Expense not found" });
    }

    // Return success message with the updated expense

    return res.status(200).json({
      message: "Expense deleted successfully",
      expense: updated
    });
    
  } catch (err) {

    // Log the error and return a 500 status code with an error message
    return res.status(500).json({ message: "Server error", error: err.message });

  }
};

//getExpenses() function

export const getExpenses = (req, res) => {

    //Extract fields from query string

    const { userId, month } = req.query;

    // Initialize empty date range filter

    let dateFilter = {};

    //If month is provided, create date range filter

    if (month) {

    const [year, monthPart] = month.split('-');

    //start date

    const startDate = new Date(Date.UTC(year, monthPart - 1, 1, 0, 0, 0));

    //end date

    const endDate = new Date(Date.UTC(year, monthPart, 0, 23, 59, 59));    //Set date range filter

    dateFilter = { date: { $gte: startDate, $lte: endDate } };

    console.log(startDate, endDate);

    }

    // Prepare the user filter

    let userFilter = {};

    if (userId) {

    userFilter = { user_id: userId, active: true };

    }

    // Find and aggregate expenses

    Expense.aggregate([

    {

    $match: {

    ...dateFilter,

    ...userFilter,

    active: true,

    },

    },

    {

    $lookup: {

    from: "expense_categories",

    localField: "category_id",

    foreignField: "_id",

    as: "category",

    },

    },

    {

    $unwind: "$category",

    },

    {

    $project: {

    date: 1,

    amount: 1,

    description: 1,

    categoryName: "$category.name",

    },

    },

    ])

    .sort({ date: -1 })

    .then(expenses => {

    // Calculate the sum of all expenses

    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    // Create JSON Object with total expenses and expenses array

    const expenseJsonWithTotal = { totalExpenses, expenses};

    res.status(200).json(expenseJsonWithTotal);

    })

    .catch(error => {

    console.error("Error fetching expenses:", error);

    res.status(500).json({ error: "Server error." });

    });

};

//getExpenseSummary() function

export const getExpenseSummary = (req, res) => {

    const { userId, month } = req.query;

    // Prepare date filters if month is provided

    let dateFilter = {};

    if (month) {

    const [year, monthPart] = month.split('-');

    const startDate = new Date(Date.UTC(year, monthPart - 1, 1, 0, 0, 0));

    const endDate = new Date(Date.UTC(year, monthPart, 0, 23, 59, 59));

    dateFilter = { date: { $gte: startDate, $lte: endDate } };

    }

    // Prepare user filter if userId is provided

    let userFilter = {};

    if (userId) {

    userFilter = { user_id: userId };

    }

    Expense.aggregate([

    {

        $match: {

        ...userFilter,

        ...dateFilter,

        active: true,

        },

    },

    {

        $lookup: {

        from: "expense_categories",

        localField: "category_id",

        foreignField: "_id",

        as: "category",

        },

    },

    {

        $unwind: "$category",

    },

    {

        $group: {

        _id: "$category_id",

        categoryName: { $first: "$category.name" },

        categoryExpense: { $sum: "$amount" },

        },

    },

    {

        $group: {

        _id: null,

        totalExpense: { $sum: "$categoryExpense" },

        categories: {

            $push: {

            category_id: "$_id",

            categoryName: "$categoryName",

            categoryExpense: "$categoryExpense",

            },

        },

        },

    },

    {

        $project: {

        _id: 0,

        categories: {

            $map: {

            input: "$categories",

            as: "cat",

            in: {

                categoryName: "$$cat.categoryName",

                percentage: {

                $multiply: [

                    { $divide: ["$$cat.categoryExpense", "$totalExpense"] },

                    100,

                ],

                },

            },

            },

        },

        },

    },

    {

        $unwind: "$categories",

    },

    {

        $replaceRoot: { newRoot: "$categories" },

    },

    ])

    .sort({ categoryName: 1 })

    .then(expenseSummary => {

    // Format percentage to 2 decimal places

    expenseSummary.forEach((ex) => {

        ex.percentage = `${ex.percentage.toFixed(2)}%`;

    });

    res.status(200).json(expenseSummary);

    })

    .catch(error => {

    console.error("Error fetching expenses:", error);

    res.status(500).json({ error: "Server error." });

    });

};
