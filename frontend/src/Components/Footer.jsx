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
                                <h1>Car Rentals</h1>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est rerum nemo eaque. Repudiandae eos aliquam incidunt praesentium! Temporibus quidem repellendus, vitae excepturi impedit provident praesentium, doloremque ipsum delectus accusantium nam?
                                </p>
                            </div>
                        </div>

                        <div className='col-12 col-md-3 footer-content-col' >
                            <div className='footer-content pt-5'>
                                <h3>Quick Links</h3>
                                <ul >
                                    <li><Link to='/home' className='text-light no-underline'>Home</Link></li>
                                    <li><Link to='/about' className='text-light no-underline'>About</Link></li>
                                    <li><Link to='/products'className='text-light no-underline'>Service</Link></li>
                                    <li><Link to='/contact' className='text-light no-underline'>Book a bus</Link></li>
                                </ul>

                            </div>
                        </div>

                        <div className='col-12 col-md-3 footer-content-col' >
                            <div className='footer-content pt-5'>
                                <h3>Site Links</h3>
                                <ul>
                                    <li><Link to='/cart' className='text-light no-underline'>Rental Details</Link></li>
                                    <li><Link to='/comboproducts' className='text-light no-underline'>Drop</Link></li>
                                    <li> <Link to={"/privacy-policy"} className='text-light no-underline'> Privacy Policy</Link></li>
                                    <li> <Link to={"/terms&conditions"} className='text-light no-underline'> Terms & Conditions</Link></li>
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
                                    XYZ Corporation
                                    1234 Elm Street
                                    Suite 567
                                    Springfield, IL 62704
                                    USA
                                </p>

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