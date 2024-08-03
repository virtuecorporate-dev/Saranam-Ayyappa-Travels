import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterPage from './Register';

const LoginPopup = ({ onClose }) => {
  const [isRegisterVisible, setRegisterVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/v1/login', {
        email,
        password
      });

      // Assume the API response contains user data if login is successful
      const user = response.data.user;

      if (user) {
        localStorage.setItem('user', JSON.stringify(user)); // Save user data to localStorage
        toast.success('Login successful!');
        navigate('/admin'); // Redirect to /admin
        onClose();
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
      console.error(error.message);
    }
  };

  const handleOpenRegister = () => {
    setRegisterVisible(true);
  };

  const handleCloseRegister = () => {
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
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="login-input">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="login-button" onClick={handleLogin}>
                  LOGIN
                </button>
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
      <ToastContainer />
    </div>
  );
};

export default LoginPopup;
