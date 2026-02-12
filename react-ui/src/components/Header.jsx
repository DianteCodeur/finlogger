import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Header() {
    return (
        <header className="header text-white py-3">
            <Container fluid="lg">
                <Row>
                    <Col md="6">
                        <div className="title">
                            <h1>FinLogger</h1>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="tagline text-md-end">
                            <h5>Your Personal Finance Tracker !</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;