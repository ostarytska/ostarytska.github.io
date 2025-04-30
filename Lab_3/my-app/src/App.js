import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Training from './pages/Training';
import Journal from './pages/Journal';
import Progress from './pages/Progress';
import Ration from './pages/Ration';
import './styles/styles.css';



function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<Training />} />
          <Route path="/workout-journal" element={<Journal />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/diet" element={<Ration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
