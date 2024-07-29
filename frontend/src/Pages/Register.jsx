import React from 'react';

const RegisterPage = ({ onCloseRegister }) => {
const handleCloseRegister =(()=>{
  onCloseRegister()
})

  return (
    <div className="register-container">
      <div className="register-popup-content">
      
        <div className="register-right">
          <div className="register-header">
            <i className="fa-solid fa-user"></i>
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
              <button onClick={handleCloseRegister}>Already have an account? Log In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
