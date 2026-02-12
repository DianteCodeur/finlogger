import React from "react";
import {Table, Col} from "react-bootstrap";

export const ExpenseSummary = ({data}) => {

    const tableItems = data.map((expense) => {

        if (!data || !Array.isArray(data)) return null;

        return (
            <tr key={expense.categoryName}>    
                <td>{expense.categoryName}</td>
                <td>{expense.percentage}</td>
            </tr>
        );
    });

    return (
        <Col md="4" className="mb-4">
            <p className="heading">Expense Summary</p>
            <Table striped bordered hover id="expense-summary">
                <thead>
                    <tr>
                        <th>EXPENSE CATEGORY</th>
                        <th>%</th>
                    </tr>
                </thead>
                <tbody>{tableItems}</tbody>
            </Table>
        </Col>
    );

}

export default ExpenseSummary;