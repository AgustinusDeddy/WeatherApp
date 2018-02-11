import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import StateForm from './StateForm';

export default function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />

        <div className="home-container" style={{ backgroundImage: "url('app/images/background.jpg')" }}>
          <h1>Enter a City and State</h1>
          <StateForm />
        </div>
      </div>
    </Router>
  );
}
