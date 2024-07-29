import React, { Fragment } from 'react';
 

export default function About() {
    return (
        <Fragment>
            <div className="container-fluid p-0">
                <div className="about-img ">
                    <img src="./images/w4.jpg" alt="" />
                </div>
                <div className="about-text">

                    <h1 >About us</h1>
                    <h3>Be comfortable while you travel with our reliable bus rental.</h3>
                </div>

            </div>
            <main>
                <div className="container-fluid mt-5 about">
                    <div className="row p-5 about-row">
                        <div className="col-lg-4 about-head">
                            <h5>WHO WE ARE</h5>

                            <h4>Enjoy the journey – travel with us</h4>
                        </div>
                        <div className="col-lg-8">
                            
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odio reprehenderit quos minima natus. Non est explicabo sed culpa iusto accusantium ducimus asperiores dolore voluptatibus, perferendis architecto aut, necessitatibus esse?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni non eveniet, consequatur quas vel quaerat voluptate animi! Sequi incidunt ipsa odit hic, itaque reprehenderit exercitationem ipsum asperiores quam voluptatibus earum.</p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-3 about-img">
                            <img src="./images/car1.png" alt="" class="img-fluid" />
                        </div>
                        <div className="col-lg-3 about-img">
                            <img src="./images/car2.png" class="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-3 about-img">
                            <img src="./images/car3.png" class="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-3 about-img">
                            <img src="./images/car4.png" class="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </main>
            <section className='container-fluid landing ' >
                <div className='row' style={{"margin-top":"200px"}}>
                    <div className='col-12 p-0'>
                        <div className='banner'>
                            <div className="banner-img">
                                <img src="images/w5 (1).jpg" alt="image-not-found" className='img-fluid' />
                            </div>
                            <div className="landing-text container-fluid">
                                <div className='row'>
                                    <div className="col-lg-8 col-sm-8 col-md-6 ">
                                        <div className='about-banner-content p-5'>
                                            <h1>Why Choose Us                                            </h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                            <div className="row mt-4 about-banner-para">
                                                <div className="col-lg-6 mt-4 ">
                                                    <h3 className='text-center'>
                                                    <i class="fa-solid fa-check"></i> &nbsp;
                                                        Safety & Security</h3>
                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quaerat iusto sequi saepe rerum quis et nesciunt quia expedita! Quas dolores cum aliquam iure tenetur, aut rerum? Officia, accusantium in.</p>
                                                </div>
                                                <div className="col-lg-6 mt-4">
                                                    <h3 className='text-center'>
                                                    <i class="fa-solid fa-check"></i> &nbsp;
                                                    On Time & Punctual</h3>
                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quaerat iusto sequi saepe rerum quis et nesciunt quia expedita! Quas dolores cum aliquam iure tenetur, aut rerum? Officia, accusantium in.</p>
                                                </div>
                                                <div className="col-lg-6 mt-4">
                                                    <h3 className='text-center'>
                                                    <i class="fa-solid fa-check"></i> &nbsp;
                                                    Professional Drivers</h3>
                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quaerat iusto sequi saepe rerum quis et nesciunt quia expedita! Quas dolores cum aliquam iure tenetur, aut rerum? Officia, accusantium in.</p>
                                                </div>
                                                <div className="col-lg-6 mt-4">
                                                    <h3 className='text-center'>
                                                    <i class="fa-solid fa-check"></i> &nbsp;
                                                    Well Maintenance</h3>
                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quaerat iusto sequi saepe rerum quis et nesciunt quia expedita! Quas dolores cum aliquam iure tenetur, aut rerum? Officia, accusantium in.</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-3 col-sm-4 col-md-5"></div>

                                </div>


                            </div>
                        </div>

                    </div>
                </div>


            </section>
            <section>
                <div className="container mb-3 about-ser">
                    <div className="row about-service">
                        <div className="col-lg-6">
                                <img src="./images/carbanner1.png" alt="" className='img-fluid'/>
                        </div>
                        <div className="col-lg-6">
                            <h3>We make sure every bus is in excellent shape
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <div >
                                <ul className="about-point p-4">
                                    <li><i class="fa-solid fa-check"></i>&nbsp;  Confirming a proper amount of engine oil and coolant</li>
                                    <li><i class="fa-solid fa-check"></i>&nbsp;   Ensuring that tire pressure is at an appropriate level</li>
                                    <li><i class="fa-solid fa-check"></i>&nbsp;  Measuring tire tread depth for optimum traction</li>
                                    <li><i class="fa-solid fa-check"></i>&nbsp;   Keeping electrical equipment clean and free of dust                            </li>
                                </ul>
                            </div>
                            <button>Discover More</button>
                        </div>
                    </div>
                </div>
            </section>
           

        </Fragment>
    )
}
