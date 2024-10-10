import React, { Fragment, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LoginPage from '../Pages/Login';

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [homeNav, setHomeNav] = useState(false);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY>120) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    });
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      setHomeNav(true);
      console.log(true);
    } else {
      setHomeNav(false);
      console.log(false);
    }
  }, [location]);

  const handleOpenLogin = () => {
    setVisible(true);
  };

  const handleCloseLogin = () => {
    setVisible(false);
  };

  return (
    <Fragment>
      <nav className={navbar ? "navbar navbar-expand-lg desktop-nav scroll-nav" : "navbar navbar-expand-lg desktop-nav"}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="logo-img">
            <img className="img-fluid logo" src={homeNav || navbar ? "/images/logowhite1.png" : "/images/sap travels logo.png"} alt="Logo" style={{ width: '250px' }} />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className={homeNav ? "navbar-toggler-icon hamburger homeNav-color" : "navbar-toggler-icon hamburger"} style={{ color: "white" }}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink exact to='/' className={homeNav ? "nav-link homeNav-color" : "nav-link"} activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/about' className={homeNav ? "nav-link homeNav-color" : "nav-link"} activeClassName="active">About</NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink to='/services' className={homeNav ? "nav-link homeNav-color" : "nav-link"} activeClassName="active">Services</NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink to='/tourPackage' className={homeNav ? "nav-link homeNav-color" : "nav-link"} activeClassName="active">Tour Package</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/holidayPackage' className={homeNav ? "nav-link homeNav-color" : "nav-link"} activeClassName="active">Holiday Package</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/contactus' className={homeNav ? "nav-link homeNav-color" : "nav-link"} activeClassName="active">Contact Us</NavLink>
              </li>
            </ul>
            {/* <ul className=' navbar-nav ml-auto'>
              <li className="nav-item sign">
                <button className={homeNav ? "nav-link homeNav-color btn btn-link" : "nav-link btn btn-link"} onClick={handleOpenLogin}>Sign In</button>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
      {visible && <LoginPage onClose={handleCloseLogin} />}
      {/* ------------------mobile navbar-------------------------- */}

      <nav className={navbar ? "navbar navbar-expand-lg mobile-nav scroll-nav" : "navbar navbar-expand-lg mobile-nav"}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="logo-img mobile-logo">
            <img className="img-fluid logo" src={navbar ? "/images/logowhite1.png" : "/images/sap travels logo.png"} alt="Logo" style={{ width: '150px' }} />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" activeClassName="active">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tourPackage" className="nav-link" activeClassName="active">Tour Package</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/holidayPackage" className="nav-link" activeClassName="active">Holiday Package</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink to="/contactus" className="nav-link" activeClassName="active">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

