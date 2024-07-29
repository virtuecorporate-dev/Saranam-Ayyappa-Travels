import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="register-container">
      <div className="register-left">
        <div className="register-phone">
          <img src="./images/sap travels logo.png" alt="Phone" className="register-phone-image" />
        </div>
      </div>
      <div className="register-right">
        <div className="register-header">
          {/* <img src="user-icon-url" alt="User Icon" className="register-user-icon" /> */}
          <i class="fa-solid fa-user"></i>
          <h2>CREATE ACCOUNT</h2>
        </div>
        <div className="register-form">
          <div className="register-input">
            <input type="text" placeholder="Username" />
          </div>
          <div className="register-input">
            <input type="email" placeholder="Email" />
          </div>
          <div className="register-input">
            <input type="password" placeholder="Password" />
          </div>
          <div className="register-input">
            <input type="password" placeholder="Confirm Password" />
          </div>
          <button className="register-button">REGISTER</button>
          <div className="register-login">
            <Link to="/login">Already have an account? Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
