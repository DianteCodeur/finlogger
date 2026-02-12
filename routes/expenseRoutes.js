//Import express module and controller files
import express from 'express';
import * as expenseController from '../controllers/expenseController.js';
import * as expenseCategoryController from '../controllers/expenseCategoryController.js'; 

//Create router instance
const router = express.Router();

router.post('/', expenseController.createExpense); //create expense
router.put('/:id', expenseController.updateExpense); //update expense
router.delete('/:id', expenseController.deleteExpense); //delete expense
router.get('/', expenseController.getExpenses); //get expenses
router.get('/summary', expenseController.getExpenseSummary); //get expense summary
router.get('/categories',expenseCategoryController.getAllExpenseCategories); //get expense categories



//Export the router
export default router;