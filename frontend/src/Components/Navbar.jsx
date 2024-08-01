import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LoginPage from '../Pages/Login';

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [homeNav, setHomeNav] = useState(false);
  const [visible,setVisisble] = useState(false)
  const location = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY>100) {
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

  const handleOpenLogin=(()=>{
    setVisisble(true)
  })

const handleCloseLogin=(()=>{
  setVisisble(false)
})
  return (
    <Fragment>
      <nav className={navbar ? "navbar navbar-expand-lg desktop-nav scroll-nav" : "navbar navbar-expand-lg desktop-nav"}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="logo-img">
            <img className="img-fluid logo" src={homeNav || navbar ? "/images/logowhite1.png" : "/images/sap travels logo.png"} alt="Logo" style={{ width: '200px' }} />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className={homeNav? "navbar-toggler-icon hamburger homeNav-color" : "navbar-toggler-icon hamburger"} style={{color:"white"}}>jh</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto" >
              <li className="nav-item">
                <Link to='/' style={{ "textDecoration": "none" }}> <a className={homeNav ? "nav-link homeNav-color" : "nav-link"} >Home</a> </Link>

              </li>
              <li className="nav-item">
                <Link to='/about' style={{"textDecoration":"none"}}> <a className={homeNav ? "nav-link homeNav-color" : "nav-link"} >About</a> </Link>
                
              </li>
              {/* <li className="nav-item">
                <Link to='/services' className={homeNav ? "nav-link homeNav-color" : "nav-link"} href="#">Service</Link>
              </li> */}
              <li className="nav-item">
                <Link to='/services' className={homeNav ? "nav-link homeNav-color" : "nav-link"} href="#">Tour package</Link>
              </li>
              <li className="nav-item">
                <Link to='/services' className={homeNav ? "nav-link homeNav-color" : "nav-link"} href="#">Holiday Package</Link>
              </li>
              <li className="nav-item">
              <Link to='/contactus' style={{"textDecoration":"none"}}> <a className={homeNav ? "nav-link homeNav-color" : "nav-link"} >Contact Us</a> </Link>
              </li>
            </ul>
            <ul className=' navbar-nav ml-auto'>
              <li className="nav-item sign">
              <Link className={homeNav ? "nav-link homeNav-color btn btn-link" : "nav-link btn btn-link"} onClick={handleOpenLogin}>Sign in</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
      {visible && <LoginPage onClose={handleCloseLogin}/>}
      {/* ------------------moblie navbar-------------------------- */}

      <nav className={navbar ? "navbar navbar-expand-lg mobile-nav scroll-nav" : "navbar navbar-expand-lg mobile-nav"}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="logo-img mobile-logo">
            <img className="img-fluid logo" src={navbar ? "/images/sap travels logo.png" : "/images/sap travels logo.png"} alt="Logo" style={{ width: '150px' }} />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/franchise" className="nav-link">About us</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">Service</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Book a Bus</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </Fragment>

  );
}
