import { createContext, useContext, useState, useEffect } from "react";
import { expenseData, expenseSummaryData, expenseCategories as expenseCategoriesData } from "../data.js";

const summaryData = expenseSummaryData;
const categoriesData = expenseCategoriesData;   

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [month, setMonth] = useState("2020-01");
    const [expenseSummaryData, setExpenseSummaryData] = useState(null);
    const [expenseDetailsData, setExpenseDetailsData] = useState(null);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [expenseCategories, setExpenseCategories] = useState(null);
    const [expenseIdToBeDeleted, setExpenseIdToBeDeleted] = useState(null);

    const fetchExpenseCategories = () => {
        setExpenseCategories(categoriesData.categories);
    };

    const fetchExpenseData = () => {
        setExpenseSummaryData(summaryData);
        setTotalExpenses(expenseData.totalExpenses);
        setExpenseDetailsData(expenseData.expenses);
    }

    useEffect(() => {
        if (month) fetchExpenseData();
    }, [month]);

    useEffect(() => {
         fetchExpenseCategories();
    }, []);

    return (
        <AppContext.Provider
            value={{
                month,
                setMonth,
                expenseSummaryData,
                expenseDetailsData,
                totalExpenses,
                expenseCategories,
                expenseIdToBeDeleted,
                setExpenseIdToBeDeleted,
                fetchExpenseData,
            }}
        >
            {children}
        </AppContext.Provider>
    );        

};

export const useAppContext = () => useContext(AppContext);

