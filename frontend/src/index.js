import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Changed Switch to Routes
import App from './App';
import Assurances from './Assurances';
import About from './About'; // Added About route

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes> {/* Changed from Switch to Routes */}
        <Route path="/" element={<App />} /> {/* Updated component prop to element */}
        <Route path="/assurances" element={<Assurances />} /> {/* Updated component prop to element */}
        <Route path="/about" element={<About />} /> {/* Added route to /about page */}
      </Routes>
    </Router>
  </React.StrictMode>
);
