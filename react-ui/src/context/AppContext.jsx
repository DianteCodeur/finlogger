import { createContext, useContext, useState, useEffect } from "react";
import ToastNotification from "../components/ToastNotification.jsx";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [month, setMonth] = useState("2020-01");
    const [expenseSummaryData, setExpenseSummaryData] = useState(null);
    const [expenseDetailsData, setExpenseDetailsData] = useState(null);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [expenseCategories, setExpenseCategories] = useState(null);
    const [expenseIdToBeDeleted, setExpenseIdToBeDeleted] = useState(null);
    const [userIncome, setUserIncome] = useState(0);
    const [toast, setToast] = useState({show : false, message : ""});

    const showToast = (message) => {
        setToast({show : true, message : message});
    };

    const hideToast = () => {
        setToast({show : false, message : ""});
    };

    const fetchUserIncome = async () => {
        try {
            // Make an API call to fetch user income
            const response = await fetch(
            `http://localhost:3001/income?userId=USER_1`
            );

            // Check if the response is not ok, then throw an error
            if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
            }

            // Parse the response data as JSON
            const data = await response.json();

            // Update the state with the fetched income
            setUserIncome(data.income);
        } catch (error) {
            // Log any errors that occur during the fetch
            console.error("Error fetching income:", error);
        }
    };



    const fetchExpenseCategories = async () => {
        try {
            // Make an API call to fetch expense categories
            const response = await fetch("http://localhost:3001/expenses/categories");

            // Check if the response is not ok, then throw an error
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the response data as JSON
            const data = await response.json();

            // Update the state with the fetched categories
            setExpenseCategories(data.categories);
        } catch (error) {
            // Log any errors that occur during the fetch
            console.error("Error fetching Expense Categories:", error);
        }
    };

    const fetchExpenseData = async () => {
        try {
            // Fetch expense summary data for a specific month
            const responseSummary = await fetch(`http://localhost:3001/expenses/summary?userId=USER_1&month=${month}`);
            // Check if the response is not ok, then throw an error
            if (!responseSummary.ok) {
                throw new Error(`HTTP error! Status: ${responseSummary.status}`);
            }
            const dataSummary = await responseSummary.json();
            // Update the state with the fetched summary data
            setExpenseSummaryData(dataSummary);
        } catch (error) {
            console.error("Error fetching Expense Summary data:", error);
        }

        try {
            // Fetch detailed expense data for a specific month
            const responseDetails = await fetch(`http://localhost:3001/expenses?userId=USER_1&month=${month}`);
            // Check if the response is not ok, then throw an error
            if (!responseDetails.ok) {
                throw new Error(`HTTP error! Status: ${responseDetails.status}`);
            }
            const dataDetails = await responseDetails.json();
            // Update the state with the fetched detailed data
            setExpenseDetailsData(dataDetails);
            // Set te total expenses from the detailed data
            setTotalExpenses(dataDetails.totalExpenses)
        } catch (error) {
            // Log any errors that occur during the fetch for detailed data
            console.error("Error fetching Expense Details data:", error);
        }
    }

    useEffect(() => {
        if (month) {
            fetchExpenseData();
            }
    }, [month]);

    useEffect(() => {
         fetchExpenseCategories();
    }, []);

    useEffect(() => {
         fetchUserIncome();
    }, []);

    useEffect(() => {
    if (month) {
        fetchExpenseData();
    }
    }, [month]);


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
                userIncome,
                showToast,
            }}
        >
            {children}
            <ToastNotification show={toast.show} message={toast.message} onClose={hideToast}/>
        </AppContext.Provider>
    );        

};

export const useAppContext = () => useContext(AppContext);

