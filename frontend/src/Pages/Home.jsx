import React, { Fragment } from 'react'
import BookingForm from '../Components/Form';

export default function Home() {

  return (
    <Fragment>
      <section className='container-fluid landing'>
        <div className='row'>
          <div className='col-12 p-0'>
            <div className='banner'>
              <div className="banner-img">
                <img src="images/landing.jpg" alt="image-not-found" className='img-fluid' />
              </div>
              <div className="landing-text container-fluid">

                <div className='row'>
                  <div className="col-9 col-sm-8 col-md-6">
                    <div className='banner-content'>
                      <h1>Charter With Us For An Adventure-Filled Journey</h1>

                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam cupiditate, consequuntur veritatis eaque in expedita commodi rerum eum ut, exercitationem quia. Nesciunt in nulla, totam modi iste eos alias soluta.</p>
                      <button>Explore us </button>
                    </div>

                  </div>
                  <div className="col-3 col-sm-4 col-md-5"></div>

                </div>


              </div>
            </div>

          </div>
        </div>


      </section>


      <section className='booking-form-sec'>
        <BookingForm />
      </section>

      <section className='pt-5 pb-5'>
        <div className="container-fluid ">
          <div className="container">
            <div className="row home-banner ">
              <div className="col-lg-6">
                <h2>A Cab rental that's affordable and comfortable</h2>

                <p className='mt-4'>Looking for a cab rental that's both affordable and comfortable? Our cab rental service offers top-notch vehicles and professional drivers to ensure your journey is smooth and enjoyable. Whether you need a ride for a short trip or a long-distance travel, we provide reliable and cost-effective solutions to meet your transportation needs. Book with us today and experience the convenience and comfort of our cab rental service, all at competitive prices.</p>

                <div className="row mt-2">
                  <div className="col-lg-6">
                    <h2 className='home-banner-text'>25 + </h2>
                    <h5>Cab Ready</h5>
                    <p>cabs ready to provide you with affordable and comfortable travel!</p>
                  </div>
                  <div className="col-lg-6">
                    <h2 className='home-banner-text'>97 %</h2>
                    <h5>Satisfied Customer</h5>
                    <p>Our customers are highly satisfied with our service!</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="home-banner-img">
                  <img src="./images/carbanner1.png" alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section>
        <div className="container-fluid mt-5 whoweare">
          <div className="row">
            <div className='col-12 col-md-10 mx-auto pt-5 pb-5'>
              <div className='container'>
                <div className='row'>
                  <div className="col-lg-4">
                    <h5>WHO WE ARE
                    </h5>
                    <h3>Enjoy the journey – travel with us</h3>
                  </div>
                  <div className="col-lg-8">
                    <p>At our cab rental service, we are dedicated to providing exceptional transportation experiences. We believe that every journey should be enjoyable, comfortable, and hassle-free. Our team of professional drivers and well-maintained vehicles are here to ensure that you reach your destination safely and on time. Whether you're traveling for business or leisure, choose us for a seamless and pleasant ride. Enjoy the journey – travel with us and experience the difference.</p>

                  </div>
                </div>
              </div>
            </div>


          </div>
          <div className="row gap-0" >
            <div className='whoweare-img p-0'>
              <img className='img-fluid' src="./images/who we are img.png" alt="whoweare" />
            </div>
            {/* <div className="col-lg-3">
              <img src="./images/car1.png" alt="" class="img-fluid" />
            </div>
            <div className="col-lg-3 whoweare-img">
              <img src="./images/car2.png" class="img-fluid" alt="" />
            </div>
            <div className="col-lg-3 whoweare-img">
              <img src="./images/car3.png" class="img-fluid" alt="" />
            </div>
            <div className="col-lg-3 whoweare-img">
              <img src="./images/car4.png" class="img-fluid" alt="" />
            </div> */}
          </div>
        </div>
      </section>

      <section className='mt-5 p-0 container-fluid fullbanner-sec'>
        <div className="fullbanner">
          <img src="./images/fullbanner.jpg" alt="image not found" class='img-fluid' />
        </div>
        <div className="banner-text  p-0">
          <div className="banner-text-inner">
            <h1>Charter With Us For An Adventure-Filled Journey</h1>
            <p className='mt-3'>Charter with us for an adventure-filled journey that you'll never forget. Our top-notch vehicles and experienced drivers are ready to take you to your next exciting destination. Whether you're planning a road trip, a scenic tour, or a special event, we provide reliable and comfortable transportation to make your adventure smooth and enjoyable. Trust us to be your travel partner and embark on a journey filled with fun and memorable experiences. Travel with us and turn every trip into an adventure!</p>

            <button>Explore us </button>
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