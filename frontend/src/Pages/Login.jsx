import React, { useState } from 'react';
import RegisterPage from './Register';

const LoginPopup = ({ onClose }) => {
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  const handleOpenRegister = () => {
    console.log('Opening register page');
    setRegisterVisible(true);
  };

  const handleCloseRegister = () => {
    console.log('Closing register page');
    setRegisterVisible(false);
  };

  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <button className="login-popup-close" onClick={onClose}>
          <h3>X</h3>
        </button>
        <div className="login-container container">
          {!isRegisterVisible ? (
            <div className="login-right">
              <div className="login-header">
                <i className="fa-solid fa-user"></i>
                <h2>WELCOME</h2>
              </div>
              <div className="login-form">
                <div className="login-input">
                  <input type="text" placeholder="Username" />
                </div>
                <div className="login-input">
                  <input type="password" placeholder="Password" />
                </div>
                {/* <div className="login-options">
                  <span className="login-forgot-password">Forgot Password?</span>
                </div> */}
                <button className="login-button">LOGIN</button>
                <div className="login-signin">
                  <button onClick={handleOpenRegister}>
                 New User
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <RegisterPage onCloseRegister={handleCloseRegister} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
