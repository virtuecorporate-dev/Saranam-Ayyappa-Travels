import React from 'react';
import { Link } from 'react-router-dom'


const LoginPage = () => {
  return (
    <div className="login-container container">
      <div className="login-left">
        <div className="login-phone">
          <img src="./images/carbanner.jpg" alt="Phone" className="login-phone-image" />
        </div>
      </div>
      <div className="login-right">
        <div className="login-header">
          {/* <img src="user-icon-url" alt="User Icon" className="login-user-icon" /> */}
          <i class="fa-solid fa-user"></i>
          <h2>WELCOME</h2>
        </div>
        <div className="login-form">
          <div className="login-input">
            <input type="text" placeholder="Username" />
          </div>
          <div className="login-input">
            <input type="password" placeholder="Password" />
          </div>
          <div className="login-options">
            <span className="login-forgot-password">Forgot Password?</span>
          </div>
          <button className="login-button">LOGIN</button>
          <div className="login-signin">
            <Link to='/register'>
            <span >New User</span>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
