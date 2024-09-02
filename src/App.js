import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import MainContent from './components/MainContent';
import Shop from './components/Shop';
import Home from './components/MainContent' // Import your Shop component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleAuthenticationSuccess = (email) => {
    setUserEmail(email);
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <MainContent userEmail={userEmail} /> : <AuthPage onAuthenticationSuccess={handleAuthenticationSuccess} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
