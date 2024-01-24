import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Boards from './components/pages/Boards';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Boards />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
