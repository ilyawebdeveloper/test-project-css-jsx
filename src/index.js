import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About';
import MyProjects from './pages/MyProjects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/About" element={<About />} />
      <Route path="/MyProjects" element={<MyProjects />} />
      <Route path="/MyProjects" element={<MyProjects />} />
    </Routes>
  </BrowserRouter>
);
