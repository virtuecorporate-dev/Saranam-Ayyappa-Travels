import React from 'react'

const Service = () => {
    return (
        <section>
            <div className="container-fluid p-0">
                <div className="about-img ">
                    <img src="./images/w4.jpg" alt="" />
                </div>
                <div className="about-text">

                    <h1 >Services</h1>
                    <h3>Be comfortable while you travel with our reliable bus rental.</h3>
                </div>

            </div>
            <div className='container'>
                <div className='text-center mt-5 pb-5'>
                    <h5>OUR SERVICES</h5>
                    <h1>We Provide Best Services For You</h1>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-4 service-item'>
                        <div className='service-item-inner text-center'>
                            <div className='item'>

                            <h3>Drop Services</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#DropServices">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 service-item'>
                        <div className='service-item-inner text-center'>
                            <div className='item'>
                            <h3>Hour Basis</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#DropServices">Learn More</a>
                            </div>

                        </div>
                    </div>
                    <div className='col-12 col-md-4 service-item'>
                        <div className='service-item-inner text-center'>
                        <div className='item'>
                            <h3>Day Use</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#DropServices">Learn More</a>
                        </div>

                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-2'></div>
                    <div className='col-4 service-item '>
                    <div className='service-item-inner text-center'>
                    <div className='item'>
                            <h3>Outstations</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#DropServices">Learn More</a>
                    </div>

                        </div>
                    </div>
                    <div className='col-4 service-item '>
                    <div className='service-item-inner text-center'>
                    <div className='item'>
                            <h3>Hill Stations</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <a href="#DropServices">Learn More</a>
                    </div>

                        </div>
                    </div>
                    <div className='offset-2'></div>
                    <div className='col-2'></div>
                    
                </div>
            </div>

            <section id='DropServices'>
                <h2>Drop Services</h2>
            </section>
        </section>

    )
}

export default Service