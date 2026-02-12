import React from "react";
import OverviewCard from "./OverviewCard";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useExpenseModal } from "../context/ExpenseModalContext.jsx";

function Overview({ month, handleMonthChange, userIncome, totalExpenses }) {

    console.log("userIncome:", userIncome);

    const { handleShow } = useExpenseModal();

    return (
        <div className="overview my-4">
            <Row className="mb-4">
                <Col md="6">
                    <h5 className="mt-1 mb-2 overview-hd">OVERVIEW</h5>
                </Col>
                <Col md="6">
                    <Button 
                        variant="primary" 
                        id="expenseButton"
                        className="expenseButton ml-4 float-end"
                        onClick={() => handleShow('add')}>
                        Add Expense
                    </Button>
                    <Form.Control
                        type="month"
                        id="monthFilter"
                        defaultValue={month}
                        onChange={handleMonthChange}
                        />
                </Col>
            </Row>
            <Row>
                <Col md="4">
                    <OverviewCard
                        {...{
                        cardIcon:"spending.png",
                        cardText:"Expenses",
                        cardTitle: totalExpenses,
                        }}
                    />
                </Col>
                <Col md="4">
                    <OverviewCard
                    {...{
                        cardIcon: "income.png",
                        cardText: "Monthly Income",
                        cardTitle: userIncome,
                    }}
                    />
                </Col>
                <Col md="4">
                    <OverviewCard
                    {...{
                        cardIcon: "balance.png",
                        cardText: "Balance",
                        cardTitle: userIncome - totalExpenses,
                    }}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default Overview;