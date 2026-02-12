import mongoose from 'mongoose';
import { expect} from 'chai';  
import Expense from '../../models/expense.js';
import ExpenseCategory from '../../models/expenseCategory.js'
import '../test_helper.js';

// Define the test suite for the Expense Model
describe('Expense Model', () => {

    let category;

    // Before each test, create a new category in the database
    beforeEach(async () => {
        category = await ExpenseCategory.create({ _id: "FOOD", name: 'Food' });
    });

    // Test case: Check if an expense can be created successfully
    it('should create an expense successfully', async () => {
        // Create a new expense instance with the required fields
        const expense = new Expense({
            user_id: 'USER_2',
            description: 'Lunch',
            amount: 10,
            date: new Date(),
            category_id: category._id
        });

        // Save the expense to the database and check if it was saved successfully
        const savedExpense = await expense.save();

        expect(savedExpense._id).to.exist; //check that the expense has an ID, indicating it was saved successfully
        expect(savedExpense.user_id).to.equal('USER_2'); // Check that the user ID matches USER_2
    });

    // Test case: Check if an expense can be updated successfully
    it('should update an expense successfully', async () => {
        //Create expense object
        const expense = new Expense({
                user_id: 'USER_2',
                description: 'Dinner',
                amount: 20,
                date: new Date(),
                category_id: category._id
        });
        //Save expense
        const savedExpense = await expense.save();

        // Update the expense description and amount
        savedExpense.description = 'Family Dinner';
        savedExpense.amount = 25;

        //Save the updated expense
        const updatedExpense = await savedExpense.save();

        //Check that description is updated
        expect(updatedExpense.description).to.equal('Family Dinner');
        //Check that amount is updated
        expect(updatedExpense.amount).to.equal(25);
        //Confirm that the correct expense is updated
        expect(updatedExpense._id).to.equal(savedExpense._id);
    });

    // Test case: Check if an expense can be deleted successfully
    it('should delete an expense successfully', async () => {
        //Create expense object
        const expense = new Expense({
                user_id: 'USER_2',
                description: 'Dinner',
                amount: 20,
                date: new Date(),
                category_id: category._id
        });
        //Save expense
        const savedExpense = await expense.save();

        // Delete the expense
        await Expense.findByIdAndDelete(savedExpense._id);

        //Get the expense using the ID of the deleted expense
        const deletedExpense = await Expense.findById(savedExpense._id);
        //Check that the ID should be null
        expect(deletedExpense).to.be.null;
    });

});

