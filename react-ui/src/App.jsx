import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from './components/Header.jsx';
import Overview from './components/Overview.jsx';
import ExpenseSummary from './components/ExpenseSummary.jsx';
import ExpenseDetails from './components/ExpenseDetails.jsx';
import { AppProvider, useAppContext } from './context/AppContext.jsx';
import { Container, Row } from 'react-bootstrap';

function AppContent() {
  const { month, setMonth, expenseSummaryData, expenseDetailsData, totalExpenses, userIncome } = useAppContext();

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };
  
  return (
    <div className='App'>
      <Header />
          <Container fluid="lg">
            <div>
              <Overview
                month={month}
                handleMonthChange={handleMonthChange}
                userIncome={userIncome}
                totalExpenses={totalExpenses}
              />
            </div>
            <Row className="tbl-container mb-4">
              {expenseSummaryData ? (<ExpenseSummary data={expenseSummaryData} />) : (<div>Loading Expense Summary Data...</div>)} 
              {expenseDetailsData ? (<ExpenseDetails data={expenseDetailsData} />) : (<div>Loading Expense Details data...</div>)}
            </Row>
          </Container>
      </div>
  );
}
  

function App() {

  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}

export default App;
