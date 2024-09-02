import React, { useState } from 'react';
import { checkUserExists, validateLogin } from '../utils/mockDatabase';
import logo from './images/logo.png'
const LoginForm = ({ onLoginSuccess, onSwitchToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkUserExists(email)) {
      setError('User not found, please sign up');
      return;
    }
    if (!validateLogin(email, password)) {
      setError('Invalid password');
      return;
    }
    setError('');
    onLoginSuccess(email);  // Pass email to success callback
  };

  return (
    <form onSubmit={handleSubmit} className='Form'>
      <div className="login">
        <div id="logo-login">
        <a href="/"><img src={logo} alt="logo"  /></a>
      </div>
      <h2>Login <span>...</span></h2>
      <div className='input'> 

        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder='Email...'
          required 
        />
      </div>
      <div className='input'>
      
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder='Password...'
          required 
        />
      </div>
      {error && <p>{error}</p>}
      <div className="button">
      <button type="submit"className='button'>Login</button>
      <button type="button" className='button'  onClick={onSwitchToSignUp}>Switch to Sign Up</button>  
      </div>
      
      </div>
      
    </form>
  );
};

export default LoginForm;
