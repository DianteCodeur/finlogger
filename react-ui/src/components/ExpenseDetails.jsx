import { Table, Col } from "react-bootstrap";
import DeleteConfirmationModal from "./DeleteConfirmationModal.jsx";
import { useState } from "react";
import { useExpenseModal } from "../context/ExpenseModalContext.jsx";
import { useAppContext } from "../context/AppContext.jsx";
import React from "react";


function updateDateFormat(date) {
    const d1 = new Date(date);
    const month = d1.toLocaleDateString("en-us", { month: "short" });
    const day = d1.getDate();
    const dayOfWeek = d1.toLocaleDateString("en-us", { weekday: "short" });
    return `${month} ${day}, ${dayOfWeek}`;
}

function ExpenseDetails ({data}) {

    const { expenseIdToBeDeleted, setExpenseIdToBeDeleted, fetchExpenseData, showToast} = useAppContext();

    const { handleShow } = useExpenseModal();

    const [showDM, setShowDM] = useState(false);

    const handleEdit = (event, expense) => {
        event.preventDefault();
        handleShow('edit', expense);
    }

        const handleDMShow = (event, expenseId) => {
            event.preventDefault();
            setShowDM(true);
            setExpenseIdToBeDeleted(expenseId);
        }

        const handleDMClose = () => {
            setShowDM(false);
        }

        const handleDelete = () => {
            fetch(`http://localhost:3001/expenses/${expenseIdToBeDeleted}`, {
            method: 'DELETE',
            })
            .then(response => {
                if (!response.ok) {
                throw new Error(`Failed to delete expense! Response status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                fetchExpenseData();
                showToast("Expense Deleted successfully!");
                console.log("Item deleted", data);
            })
            .catch(error => {
                console.error("Error deleting expense:", error);
                showToast("Error deleting expense!");        
            })
            .finally(() => {
                setExpenseIdToBeDeleted(null);
                handleDMClose();       
            });
            
        }

    const tableItems = data.expenses.map((expense) => {
        return (
            <tr key={expense._id}>
                <td className="text-nowrap">{updateDateFormat(expense.date)}</td>

                <td>{expense.description}</td>

                <td>${expense.amount}</td>
                <td className="d-flex">
                <a
                    href="#"
                    className="me-2 edit expButton"
                    onClick={(e) => handleEdit(e, expense)}>
                    <img src="./images/edit.png" alt="Edit" width={40} />
                </a>
                <a
                    href="#"
                    className="delete"
                    onClick={(e) => handleDMShow(e, expense._id)}>
                    <img src="./images/delete.png" alt="Delete" width={40}/>
                </a>
                </td>
            </tr>
        );
    });

    return (
        <Col md="8">
            <p className="heading">Expense Details</p>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th width="31%">DATE</th>
                    <th width="31%">DESCRIPTION</th>
                    <th width="31%">AMOUNT</th>
                    <th width="7%" className="editDeleteTd"></th>
                </tr>
                </thead>
                <tbody>{tableItems}</tbody>
            </Table>
            {showDM && <DeleteConfirmationModal
                        showDM={showDM}
                        handleDMClose={handleDMClose}
                        handleDelete={handleDelete}
                    />}
            </Col>
    );
}

export default ExpenseDetails;