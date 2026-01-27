import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Overview from './components/Overview.jsx';
import ExpenseSummary from './components/ExpenseSummary.jsx';
import ExpenseDetails from './components/ExpenseDetails.jsx';
import { AppProvider, useAppContext } from './context/AppContext.jsx';
import { ExpenseModalProvider } from './context/ExpenseModalContext.jsx';
import { user } from './data.js';
import { Container, Row } from 'react-bootstrap';

function AppContent() {
  const { month, setMonth, expenseSummaryData, expenseDetailsData, totalExpenses } = useAppContext();

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };
  
  return (
    <div className='App'>
      <Header />
        <ExpenseModalProvider>
          <Container fluid="lg">
            <div>
              <Overview
                month={month}
                handleMonthChange={handleMonthChange}
                userIncome={user.income}
                totalExpenses={totalExpenses}
              />
            </div>
            <Row className="tbl-container mb-4">
              {expenseSummaryData ? (<ExpenseSummary data={expenseSummaryData} />) : (<div>Loading Expense Summary Data...</div>)} 
              {expenseDetailsData ? (<ExpenseDetails data={expenseDetailsData} />) : (<div>Loading Expense Details data...</div>)}
            </Row>
          </Container>
        </ExpenseModalProvider>
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
