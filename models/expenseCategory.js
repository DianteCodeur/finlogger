import mongoose from 'mongoose';

//Create schema expenseCategorySchema for expense_categories collection

const expenseCategorySchema = new mongoose.Schema ({

 _id: String,

 name: String

},{ collection: 'expense_categories' });

//Create ExpenseCategory model using expenseCategorySchema

const ExpenseCategory = mongoose.model('ExpenseCategory', expenseCategorySchema);

//Export ExpenseCategory model

export default ExpenseCategory;