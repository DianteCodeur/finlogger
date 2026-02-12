import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ExpenseDetails from "../../components/ExpenseDetails.jsx";
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

// Mock functions setExpenseIdToBeDeleted, fetchExpenseData, showToast required for testing the ExpenseDetails component
describe("ExpenseDetails Component", () => {

    // Mock functions and variables for testing
  const handleShowMock = jest.fn();
  const setExpenseIdToBeDeletedMock = jest.fn();
  const fetchExpenseDataMock = jest.fn();
  const showToastMock = jest.fn();

  let expenseIdToBeDeleted = null;

  const mockData = {
    expenses: [
        {
        _id: 1,
        description: "Groceries",
        amount: 50,
        categoryName: "Food",
        date: "2020-01-15",
        },
        {
        _id: 2,
        description: "Rent",
        amount: 1000,
        categoryName: "Housing",
        date: "2020-01-01",
        },
    ],
    };


  beforeEach(() => {
    expenseIdToBeDeleted = null;

    // Mock implementation of setExpenseIdToBeDeleted to update the expenseIdToBeDeleted variable
    setExpenseIdToBeDeletedMock.mockImplementation((id) => {
      expenseIdToBeDeleted = id;
    });

    // Mock the implementation of useExpenseModal to return the handleShow function
    useExpenseModal.mockReturnValue({
      handleShow: handleShowMock,
    });

    // Setup mock return value for useAppContext to provide necessary functions and variables
    useAppContext.mockReturnValue({
      setExpenseIdToBeDeleted: setExpenseIdToBeDeletedMock,
      fetchExpenseData: fetchExpenseDataMock,
      showToast: showToastMock,
    });
  });

  // Test 1: Verify that the component renders the expense details correctly
  test("renders ExpenseDetails with correct data", () => {
    render(<ExpenseDetails data={mockData} />);

    expect(screen.getByText("Expense Details")).toBeInTheDocument();
    expect(screen.getByText("Groceries")).toBeInTheDocument();
    expect(screen.getByText("$50")).toBeInTheDocument();
    expect(screen.getByText("Rent")).toBeInTheDocument();
    expect(screen.getByText("$1000")).toBeInTheDocument();
  });

// Test 2: Simulate clicking the delete button and verify that the delete confirmation modal is shown
  test("opens delete confirmation modal when delete button is clicked", () => {
    render(<ExpenseDetails data={mockData} />);

    const deleteButtons = screen.getAllByAltText("Delete");
    fireEvent.click(deleteButtons[0]);

    expect(setExpenseIdToBeDeletedMock).toHaveBeenCalledWith(1);
    expect(expenseIdToBeDeleted).toBe(1);
  });

});
