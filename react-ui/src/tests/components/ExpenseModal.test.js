import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import ExpenseModal from "../../components/ExpenseModal.jsx";
import { useExpenseModal } from "../../context/ExpenseModalContext";
import { useAppContext } from "../../context/AppContext.jsx";
import '@testing-library/jest-dom';

// Mock ExpenseModalContext - useExpenseModal hook
jest.mock("../../context/ExpenseModalContext", () => ({
    useExpenseModal: jest.fn(),
}));

// Mock AppContext - useAppContext hook
jest.mock("../../context/AppContext.jsx", () => ({
    useAppContext: jest.fn(),
}));

// Mock functions and variables for testing the ExpenseModal component
describe("ExpenseModal Component", () => {

    // Mock functionshandleClose, showToast, fetchExpenseData required for testing the ExpenseModal component
    const handleCloseMock = jest.fn();
    const showToastMock = jest.fn();
    const fetchExpenseDataMock = jest.fn();
    const expenseCategoriesMock = ["Food", "Housing", "Transportation"];


    // Before Each hook to provide mock functions before each test
    beforeEach(() => {
        // Mock the implementation of useExpenseModal to return the handleClose function
        useExpenseModal.mockReturnValue({
            showModal: true,           // Modal is visible
            modalMode: "add",         // Modal mode is set to "add"
            modalData: {},         // No data for new expense
            handleClose: handleCloseMock, // Mocked handleClose function
        });

        // Setup mock return value for useAppContext to provide necessary functions and variables
        useAppContext.mockReturnValue({
            expenseCategories: expenseCategoriesMock, // Mocked expense categories
            showToast: showToastMock, // Mocked showToast function
            fetchExpenseData: fetchExpenseDataMock, // Mocked fetchExpenseData function
        });

        // Mock global fetch function to simulate API response for fetching expense categories
        fetch = jest.fn((url, options) =>
            Promise.resolve({
                ok: true, // Simulate successful response
                json: () => Promise.resolve({}), // Mocked successful JSON response
            })
        );
    });

        // Test 1: Show validation errors if form is submitted with empty fields
        test("shows validation errors when form is submitted with empty fields", async () => {
            render(<ExpenseModal />); // Render the ExpenseModal component

            // Simulate clicking the submit button
            fireEvent.click(screen.getByText("Submit"));

            // Wait for validation messages to appear and verify them
            await waitFor(() => {
                // Assert error message for date field
                expect(screen.getByText("Please provide a valid date.")).toBeInTheDocument();
                // Assert error message for category field
                expect(screen.getByText("Please select a category.")).toBeInTheDocument();
                // Assert error message for description field
                expect(screen.getByText("Please provide a description.")).toBeInTheDocument();
                // Assert error message for amount field
                expect(screen.getByText("Please provide an amount.")).toBeInTheDocument();
            });

        });

        // Test 2: Simulate form submission and verify API call
        test("submits the form correctly and make an API call", async () => {
            // Arrange - Fill the form in the Expense form
            render(<ExpenseModal />); // Render the ExpenseModal component
            // Fill the date field with value 2021-07-20
            fireEvent.change(screen.getByLabelText("Date"), { target: { value: "2021-07-20" } });
            // Fill the category field with value "Groceries"
            fireEvent.change(screen.getByLabelText("Category"), { target: { value: "Food" } });
            // Fill the description field with value "Milk and Eggs"
            fireEvent.change(screen.getByLabelText("Description"), { target: { value: "Milk and Eggs" } });
            // Fill the amount field with value '10'
            fireEvent.change(screen.getByLabelText("Amount"), { target: { value: "10" } });
            // Act - Simulate form submission by clicking the submit button
            fireEvent.click(screen.getByText("Submit"));

            // Assert - wait for the API call to be made and verify it was called with correct parameters
            await waitFor(() => {
                expect(fetch).toHaveBeenCalledWith('http://localhost:3001/expenses', {
                    method: 'POST', // Expecting a POST request
                    headers: { 'Content-Type': 'application/json' }, // Expecting JSON content type
                    body: JSON.stringify({
                        user_id: "USER_1", // Expecting user ID to be USER_1
                        description: "Milk and Eggs", // Expecting description value from the form
                        amount: 10, // Expecting amount value from the form
                        date: "2021-07-20", // Expecting the date value from the form
                        categoryName: "Food", // Expecting the categoryName value from the form

                    }), // Expecting the body to contain the form data in JSON format
                });
            });

        });

});

