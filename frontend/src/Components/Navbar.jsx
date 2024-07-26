// import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <Fragment>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             <img src="./images/sap travels bg logo.png" alt="sap logo" style={{width:"150px"}}/>
//           </a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav mx-auto" >
//               <li className="nav-item">
//                 <Link to='/' style={{"textDecoration":"none"}}> <a className="nav-link active" >Home</a> </Link>

//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">About us </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Service</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Book a Bus</a>
//               </li>



//             </ul>
//             <ul className=' navbar-nav ml-auto'>
//               <li className="nav-item sign">
//                 <a className="nav-link" href="#"><i class="fa-solid fa-user"></i> &nbsp;&nbsp; Sign in</a>
//               </li>
//               </ul>
//           </div>

//         </div>
//       </nav>
//     </Fragment>
//   )
// }

// export default Navbar

import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [homeNav, setHomeNav] = useState(false);
  // const homeNavRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY>300) {
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

  return (
    <Fragment>
      <nav className={navbar ? "navbar navbar-expand-lg desktop-nav scroll-nav" : "navbar navbar-expand-lg desktop-nav"}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="logo-img">
            <img className="img-fluid logo" src={homeNav || navbar ? "/images/sap travels logo.png" : "/images/sap travels logo.png"} alt="Logo" style={{ width: '200px' }} />
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
              <li className="nav-item">
                <a className={homeNav ? "nav-link homeNav-color" : "nav-link"} href="#">Service</a>
              </li>
              <li className="nav-item">
                <a className={homeNav ? "nav-link homeNav-color" : "nav-link"} href="#">Book a Bus</a>
              </li>
            </ul>
            <ul className=' navbar-nav ml-auto'>
              <li className="nav-item sign">
                <a className={homeNav ? "nav-link homeNav-color" : "nav-link"} href="#"><i class="fa-solid fa-user"></i> &nbsp;&nbsp; Sign in</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>

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
