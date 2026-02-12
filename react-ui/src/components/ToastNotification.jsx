import React from "react";
// Import the Toast and ToastContainer component from react-bootstrap
import { Toast, ToastContainer } from "react-bootstrap";

// Define the ToastNotification component
const ToastNotification = ({message, show, onClose}) => {
    return (
        <ToastContainer position="top-end" className="p-3">
            <Toast onClose={onClose} show={show} delay={3000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Notification</strong>
                </Toast.Header>
                <Toast.Body> {message} </Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export default ToastNotification;