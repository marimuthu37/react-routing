import React from 'react';
import './index.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <div className="login-box">
        <form className="login-form">
          <input type="text" placeholder="Name" required className="input-field" />
          <input type="email" placeholder="Email" required className="input-field" />
          <input type="password" placeholder="Password" required className="input-field" />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
