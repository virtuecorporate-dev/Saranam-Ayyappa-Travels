import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <Fragment>
            <footer>
                <div className='container footer-container'>
                    <div className='row'>
                        <div className='col-12 col-md-6 footer-content-col' >
                            <div className='footer-content p-5'>
                                <div>
                                    {/* <img className='img-fluid footer-logo' src="./images/Logo.png" alt="logo" /> */}
                                </div>
                                <h1>Cab Rentals</h1>
                                <p>
                                For reliable and comfortable car rentals, contact us anytime. We look forward to serving you again soon                                </p>
                            </div>
                        </div>

                        <div className='col-12 col-md-3 footer-content-col' >
                            <div className='footer-content pt-5'>
                                <h3>Quick Links</h3>
                                <ul >
                                    <li><Link to='/home' className='text-light no-underline'  style={{ "text-decoration": "none", color: "white" }}>Home</Link></li>
                                    <li><Link to='/about' className='text-light no-underline' style={{ "text-decoration": "none", color: "white" }}>About</Link></li>
                                    <li><Link to='/products'className='text-light no-underline' style={{ "text-decoration": "none", color: "white" }}>Service</Link></li>
                                    <li><Link to='/contact' className='text-light no-underline' style={{ "text-decoration": "none", color: "white" }}>Book a bus</Link></li>
                                </ul>

                            </div>
                        </div>

                        <div className='col-12 col-md-3 footer-content-col' >
                            <div className='footer-content pt-5'>
                                <h3>Site Links</h3>
                                <ul>
                                    <li><Link to='/cart' className='text-light no-underline'  style={{ "text-decoration": "none", color: "white" }}>Rental Details</Link></li>
                                    <li><Link to='/comboproducts' className='text-light no-underline'  style={{ "text-decoration": "none", color: "white" }}>Drop</Link></li>
                                    <li> <Link to={"/privacy-policy"} className='text-light no-underline'  style={{ "text-decoration": "none", color: "white" }}> Privacy Policy</Link></li>
                                    <li> <Link to={"/terms&conditions"} className='text-light no-underline'  style={{ "text-decoration": "none", color: "white" }}> Terms & Conditions</Link></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6 footer-content-col' >
                            <div className='footer-content p-5'>
                                <h3>Follow Us On</h3>
                                <div className='footer-icons'>
                                    <i class="fa-solid fa-envelope"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-amazon"></i>
                                    <i class="fa-brands fa-facebook"></i>
                                </div>

                            </div>
                        </div>

                        <div className='col-12 col-md-3 footer-content-col' >
                            <div className='footer-content pt-5'>
                                <h3>Address</h3>
                                <p>
                                No 13, Thadagam Road, 
                                Somayampalayam Post, Kanuvai, 
                                Coimbatore
                                641108.
                                </p>

                            </div>
                        </div>

                        <div className='col-12 col-md-3 footer-content-col' >
                            <div className='footer-content pt-5'>
                                <h3>Contact</h3>
                                <a className='p-0'  style={{ "text-decoration": "none", color: "white" }} href="tel:9994074471"><p  className='my-0'>9994074471</p></a>
                                <a  className='p-0'  style={{ "text-decoration": "none", color: "white" }} href="tel:9994074471"><p  className='my-0'>9994074471</p></a>
                                <a  className='p-0'  style={{ "text-decoration": "none", color: "white" }} href="tel:9443403533."><p  className='my-0'>9443403533</p></a>
                                

                            </div>
                        </div>

                        {/* <div className='col-12 col-md-3 footer-content-col' >
                        <div className='footer-content pt-5'>
                            <h3>Site Links</h3>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Shipping Details</li>
                                <li>Offers Coupons</li>
                                <li>Terms & Conditions</li>
                                <li>Shop</li>
                            </ul>

                        </div>
                    </div> */}
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}