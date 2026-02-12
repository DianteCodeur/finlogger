import React from 'react'; // Import React to use JSX and create components
import CreateUser from 'views/CreateUser.js'; // Import the CreateUser component from the specified path
import './App.css'; // Import the CSS file for styling the App component

function App() {
 return (
   <div className="app"> {/* Main container with a class name for styling */}
   <h1>VitalBliss User Management</h1> {/* Heading for the application */}
   <CreateUser /> {/* Include the CreateUser component to handle user creation */}
   </div>
 );
}

export default App; // Export the App component as the default export of the module