import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'


export default function About() {
  return (
    <Fragment>
      <div className="container-fluid p-0">
        <div className="about-img ">
          <img src="./images/w4.jpg" alt="" />
        </div>
        <div className="about-text">

          <h2 className='text-center ' >
            <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home/ </Link>
            <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About Us</Link>
          </h2>   <h3>Be comfortable while you travel with our reliable Cab rental.</h3>
        </div>

      </div>
      <main>
        <div className="container-fluid  mt-5 about">
          <div className="row p-5 ">
            <div className='col-12 col-md-10 mx-auto pt-5 pb-5'>
              <div className='container'>
                <div className='row'>
                  <div className="col-lg-4 about-head">
                    <h5>WHO WE ARE
                    </h5>
                    <h3>Enjoy the journey – travel with us</h3>
                  </div>
                  <div className="col-lg-8 about-row">
                    <p>At our core, we are passionate about making every journey an unforgettable experience. We believe in the magic of travel, the thrill of exploring new destinations, and the joy of discovering the unknown. Our team is dedicated to providing exceptional service, ensuring that every step of your journey is seamless and enjoyable. From the moment you book with us to the time you return home, we are committed to creating memories that will last a lifetime. Whether you're embarking on a solo adventure, a family vacation, or a romantic getaway, travel with us and let us make your journey as delightful as the destination itself.</p>
                  </div>
                </div>
              </div>
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
              <img src="./images/car4.png" class="img-fluid" alt="image not found" />
            </div>
          </div>
        </div>
      </main>
      <section className='container-fluid landing ' >
        <div className='row' style={{ "margin-top": "200px" }}>
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
                      <p>Choose us for cab rental for our well-maintained vehicles, professional drivers, transparent pricing, and exceptional customer service, ensuring a smooth and reliable experience every time.</p>
                      <div className="row mt-4 about-banner-para">
                        <div className="col-lg-6 mt-4 ">
                          <h3 className='text-center'>
                            <i class="fa-solid fa-check"></i> &nbsp;
                            Safety & Security</h3>
                            <p>
                            We prioritize your safety with stringent vehicle checks and 24/7 support, ensuring a secure journey.
                      </p>
                        </div>
                        <div className="col-lg-6 mt-4">
                          <h3 className='text-center'>
                            <i class="fa-solid fa-check"></i> &nbsp;
                            On Time & Punctual</h3>
                            <p>We pride ourselves on being on time and punctual, ensuring you reach your destination promptly and reliably every time.</p>
                        </div>
                        <div className="col-lg-6 mt-4">
                          <h3 className='text-center'>
                            <i class="fa-solid fa-check"></i> &nbsp;
                            Professional Drivers</h3>
                            <p>Our professional drivers are experienced, courteous, and dedicated to providing a safe and comfortable journey for you.</p>
                        </div>
                        <div className="col-lg-6 mt-4">
                          <h3 className='text-center'>
                            <i class="fa-solid fa-check"></i> &nbsp;
                            Well Maintenance</h3>
                            <p>We meticulously maintain our vehicles to ensure a safe, smooth, and reliable ride every time.</p>
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
              <img src="./images/carbanner1.png" alt="" className='img-fluid' />
            </div>
            <div className="col-lg-6">
              <h3>We make sure every Cab is in excellent shape
              </h3>
              <p>We ensure every cab is in excellent shape through regular maintenance and thorough inspections. Our commitment to vehicle upkeep means you can trust in a safe, comfortable, and reliable ride every time you travel with us.
              </p>
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
      <section>
        <div className="container-fluid">
          <div className="container p-5">
            <h5 className='text-center' style={{ fontWeight: "700", "font-size": "30px" }}>OUR SERVICES </h5>
            <h3 className='text-center  mt-4' style={{ fontWeight: "700", "font-size": "45px", "color": "#005395" }}> We Provide Best Services For You</h3>
            <p className='text-center mt-4' style={{ fontWeight: "400", "font-size": "18px" }}>
              Our cab rental service is dedicated to providing you with the best services tailored to your needs. Whether you need a quick ride across town, a comfortable long-distance journey, or transportation for a special event, we have you covered. With our well-maintained fleet and professional drivers, we ensure a smooth, safe, and reliable experience. Choose us for punctual, dependable service designed to meet your every transportation need.
            </p>

          </div>
          <div className="row p-5 home-banner1-icons">
            <div className="col-lg-4 d-flex align-items-center justify-content-center">
              <div className="card">
                <div className='flat-icons'>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="80" height="80" x="0" y="0" viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                    <g>
                      <g data-name="Layer 2">
                        <path d="M32 33a6 6 0 1 0-6-6 6 6 0 0 0 6 6zm0-10a4 4 0 1 1-4 4 4 4 0 0 1 4-4z" fill="#005395" opacity="0" data-original="#000000" />
                        <path d="M54 52a1 1 0 0 0 1-1v-8.5l6.2-4.65a2.87 2.87 0 0 0 1.14-2.29A2.84 2.84 0 0 0 60 32.77a2.78 2.78 0 0 0-2.13.43l-.91.6V13.1a1 1 0 0 0-.83-1L45 10.16V8a1 1 0 0 0-1-1h-4V2a1 1 0 0 0-1-1H25a1 1 0 0 0-1 1v5h-4a1 1 0 0 0-1 1v2.16L7.83 12.11a1 1 0 0 0-.83 1V33.8l-.9-.6a2.85 2.85 0 0 0-3.3 4.65L9 42.5V51a1 1 0 0 0 1 1v9H1v2h62v-2h-9zm-7-27a4 4 0 1 1-4 4 4 4 0 0 1 4-4zM26 3h12v4H26zm-5 26a4 4 0 1 1-4-4 4 4 0 0 1 4 4zM9 13.94l10-6.54V33.8l-0.9-0.6a2.85 2.85 0 0 0-3.3 4.65L9 42.5V51a1 1 0 0 0 1 1v9H1v2h62v-2h-9zm33 36H14v-6h27z" fill="#005395" opacity="1" />
                      </g>
                    </g>
                  </svg>
                </div>

                <div className="card-body">
                  <h5 className="card-title text-center">One Way Trip</h5>
                  <p className="card-text text-center"> For a seamless travel experience, choose our one-way trip service. Enjoy convenient and reliable transportation with professional drivers and well-maintained vehicles. Reach your destination comfortably and on time with ease.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-center">
              <div className="card">
                <div className='flat-icons'>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="80" height="80" x="0" y="0" viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                    <g>
                      <g data-name="Layer 2">
                        <path d="M32 33a6 6 0 1 0-6-6 6 6 0 0 0 6 6zm0-10a4 4 0 1 1-4 4 4 4 0 0 1 4-4z" fill="#005395" opacity="0" data-original="#000000" />
                        <path d="M54 52a1 1 0 0 0 1-1v-8.5l6.2-4.65a2.87 2.87 0 0 0 1.14-2.29A2.84 2.84 0 0 0 60 32.77a2.78 2.78 0 0 0-2.13.43l-.91.6V13.1a1 1 0 0 0-.83-1L45 10.16V8a1 1 0 0 0-1-1h-4V2a1 1 0 0 0-1-1H25a1 1 0 0 0-1 1v5h-4a1 1 0 0 0-1 1v2.16L7.83 12.11a1 1 0 0 0-.83 1V33.8l-.9-.6a2.85 2.85 0 0 0-3.3 4.65L9 42.5V51a1 1 0 0 0 1 1v9H1v2h62v-2h-9zm-7-27a4 4 0 1 1-4 4 4 4 0 0 1 4-4zM26 3h12v4H26zm-5 26a4 4 0 1 1-4-4 4 4 0 0 1 4 4zM9 13.94l10-6.54V33.8l-0.9-0.6a2.85 2.85 0 0 0-3.3 4.65L9 42.5V51a1 1 0 0 0 1 1v9H1v2h62v-2h-9zm33 36H14v-6h27z" fill="#005395" opacity="1" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">Round Trip</h5>
                  <p className="card-text text-center">Experience the convenience of our round trip service. Enjoy a comfortable and reliable journey with both outbound and return transportation included. Our professional drivers and well-maintained vehicles ensure a smooth trip from start to finish.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-center">
              <div className="card">
                <div className='flat-icons'>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="80" height="80" x="0" y="0" viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                    <g>
                      <g data-name="Layer 2">
                        <path d="M32 33a6 6 0 1 0-6-6 6 6 0 0 0 6 6zm0-10a4 4 0 1 1-4 4 4 4 0 0 1 4-4z" fill="#005395" opacity="0" data-original="#000000" />
                        <path d="M54 52a1 1 0 0 0 1-1v-8.5l6.2-4.65a2.87 2.87 0 0 0 1.14-2.29A2.84 2.84 0 0 0 60 32.77a2.78 2.78 0 0 0-2.13.43l-.91.6V13.1a1 1 0 0 0-.83-1L45 10.16V8a1 1 0 0 0-1-1h-4V2a1 1 0 0 0-1-1H25a1 1 0 0 0-1 1v5h-4a1 1 0 0 0-1 1v2.16L7.83 12.11a1 1 0 0 0-.83 1V33.8l-.9-.6a2.85 2.85 0 0 0-3.3 4.65L9 42.5V51a1 1 0 0 0 1 1v9H1v2h62v-2h-9zm-7-27a4 4 0 1 1-4 4 4 4 0 0 1 4-4zM26 3h12v4H26zm-5 26a4 4 0 1 1-4-4 4 4 0 0 1 4 4zM9 13.94l10-6.54V33.8l-0.9-0.6a2.85 2.85 0 0 0-3.3 4.65L9 42.5V51a1 1 0 0 0 1 1v9H1v2h62v-2h-9zm33 36H14v-6h27z" fill="#005395" opacity="1" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">Hourly Trip</h5>
                  <p className="card-text text-center">Opt for our hourly trip service for flexible and convenient transportation. Whether you need a vehicle for a few hours or an entire day, our professional drivers and well-maintained cars are at your service. Enjoy the freedom to travel at your own pace with reliable and comfortable rides.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </Fragment>
  )
}
