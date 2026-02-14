import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import GrievanceSystem from './pages/GrievanceSystem';
import AcademicMastery from './pages/AcademicMastery';
import Opportunities from './pages/Opportunities';
import ClubsAnnouncements from './pages/ClubsAnnouncements';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/grievance" element={<GrievanceSystem />} />
          <Route path="/academic" element={<AcademicMastery />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/clubs" element={<ClubsAnnouncements />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
