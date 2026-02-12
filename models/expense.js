import mongoose from 'mongoose';

//Create schema expenseSchema for expenses collection

const expenseSchema = new mongoose.Schema({

 user_id: { type: String, required: true },

 description: { type: String, required: true },

 amount: { type: Number, required: true },

 date: { type: Date, required: true, default: Date.now },

 category_id: { type: String, ref: "ExpenseCategory", required: true },

});

//Create Expense model using expenseSchema

const Expense = mongoose.model("Expense", expenseSchema);

//Export Expense model

export default Expense;