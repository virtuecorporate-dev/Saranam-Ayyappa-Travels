import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'


export default function About() {
  return (
    <Fragment>
      <div className="container-fluid p-0 about-banner">
        <div className="about-img ">
          <img src="./images/w4.jpg" alt="" />
        </div>
        <div className="about-text container-fluid mx-auto" >
          <div className='row'>
            <div className='col-10 col-md-6 about-content'>
              <h2 style={{fontWeight:"600"}}>About Us</h2>
              <h5 className='mt-3'>Be comfortable while you travel with our reliable bus rental.
              </h5>
                
              <p className=' bredcrumb mt-3'>
                    <Link to="/" style={{ color: "#deded7", textDecoration: "none" }}>Home/ </Link>
                    <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
                </p>
            </div>
            <div className='col-2 col-md-6'></div>
          </div>

        </div>

      </div>
      <section>
        <div className="container-fluid mt-5 whoweare" style={{ backgroundColor: "transparent" }}>
          <div className="row">
            <div className='col-12 col-md-10 mx-auto pt-5 pb-5'>
              <div className='container'>
                <div className='row' style={{ color: "black" }}>
                  <div className="col-lg-4">
                    <h6>WHO WE ARE
                    </h6>
                    <h2 style={{ color: "#005395" }}>Enjoy the journey – travel with us</h2>
                  </div>
                  <div className="col-lg-8 mt-3 mt-lg-0">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odio reprehenderit quos minima natus. Non est explicabo sed culpa iusto accusantium ducimus asperiores dolore voluptatibus, perferendis architecto aut, necessitatibus esse?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni non eveniet, consequatur quas vel quaerat voluptate animi! Sequi incidunt ipsa odit hic, itaque reprehenderit exercitationem ipsum asperiores quam voluptatibus earum.</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div className="row gap-0" >
            <div className='whoweare-img p-0'>
              <img className='img-fluid' src="./images/who we are img.png" alt="whoweare" />
            </div>

          </div>
        </div>
      </section>

      {/* <main>
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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odio reprehenderit quos minima natus. Non est explicabo sed culpa iusto accusantium ducimus asperiores dolore voluptatibus, perferendis architecto aut, necessitatibus esse?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni non eveniet, consequatur quas vel quaerat voluptate animi! Sequi incidunt ipsa odit hic, itaque reprehenderit exercitationem ipsum asperiores quam voluptatibus earum.</p>
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
              <img src="./images/car4.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </main> */}
      {/* <section className='container-fluid mt-5' >
        <div className='row' >
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


      </section> */}
      <section>
        <div className="container mb-3 about-ser">
          <div className="row about-service">
            <div className="col-lg-6">
              <img src="./images/carbanner1.png" alt="" className='img-fluid' />
            </div>
            <div className="col-lg-6">
              <h2>We make sure every bus is in excellent shape
              </h2>
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
      <section>
        <div className="container-fluid">
          <div className="container p-5">
            <h6 className='text-center' style={{ fontWeight: "700" }}>OUR SERVICES </h6>
            <h3 className='text-center  mt-4' style={{ fontWeight: "700", "color": "#005395" }}> We Provide Best Services For You</h3>
            <p className='text-center mt-4' style={{ fontWeight: "400"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis inventore non dolorem delectus nesciunt harum perferendis, in, ullam assumenda distinctio libero, dolores molestias magnam rem. Ad doloribus labore dignissimos adipisci.</p>

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
                  <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                  <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                  <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </Fragment>
  )
}
