import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto" >
              <li className="nav-item">
                <Link to='/' style={{"textDecoration":"none"}}> <a className="nav-link active" >Home</a> </Link>
                
              </li>
              <li className="nav-item">
                <Link to='/about' style={{"textDecoration":"none"}}> <a className="nav-link" >About</a> </Link>
                
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Book a Bus</a>
              </li>
              
              

            </ul>
            <ul className=' navbar-nav ml-auto'>
              <li className="nav-item sign">
                <a className="nav-link" href="#"><i class="fa-solid fa-user"></i> &nbsp;&nbsp; Sign in</a>
              </li>
              </ul>
          </div>

        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar