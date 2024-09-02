import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const AuthPage = ({ onAuthenticationSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSuccess = (email) => {
    onAuthenticationSuccess(email);
  };

  const handleSignUpSuccess = (email) => {
    onAuthenticationSuccess(email);
  };

  return (
    <div>
      {isLogin ? (
        <LoginForm 
          onLoginSuccess={handleLoginSuccess} 
          onSwitchToSignUp={() => setIsLogin(false)} 
        />
      ) : (
        <SignUpForm 
          onSignUpSuccess={handleSignUpSuccess} 
          onSwitchToLogin={() => setIsLogin(true)} 
        />
      )}
    </div>
  );
};

export default AuthPage;
