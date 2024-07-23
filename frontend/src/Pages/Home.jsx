import React, { Fragment, useReducer } from 'react'

export default function Home() {

  const InitialState = {
    triptype: "One Way Trip",
    from: "",
    to: "",
    date: new Date(),
    pickUpTime: new Date().getTime(),
    pickUpLocation: "",
    dropTime: "",
    dropLocation: "",
    package: "",
    visitingPlaces: "",
    name: "",
    mobile: "",
    mail: "",
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "TRIP-TYPE":
        console.log(action.payload);
        return { ...state, triptype: action.payload }
      case "FROM":
        console.log(action.payload);
        return { triptype: action.payload }
      case "TO":
        console.log(action.payload);
        return { triptype: action.payload }


      default:
        break;
    }

  }
  const [state, dispatch] = useReducer(reducer, InitialState)



  return (
    <Fragment>
      <div className="container-fluid banner-img">
        <img src="images/car.avif" alt="image-not-found" className='img-fluid' />
      </div>

      <section>
        <div className="container">
          <div className="row search-call">
            <div className="col-lg-4 form-left" style={{ backgroundColor: "#2E236C" }} >
              <h3>Call Now !</h3>
              <div className="row">
                <div className="col-lg-2 phone-icons mt-2">
                  <i class="fa-solid fa-phone" style={{ "fontSize": "30px", "background": "red", "padding": "8px", "color": "white" }}></i>
                </div>
                <div className="col-lg-10">
                  <h6 className='text-secondary'>Call for detail information</h6>
                  <h3>1234 1234 98</h3>
                </div>
              </div>

            </div>
            <div className="col-lg-8 form-right" style={{ backgroundColor: "white" }}>
              <form className='container-fluid'>
                <div className='row triptype'>
                  <div className='col-4 from-input'>
                    <input
                      type="radio"
                      id='One-Way-Trip'
                      name='trip-type'
                      value="One Way Trip"
                      checked={state.triptype === 'One Way Trip'}
                      onChange={(e) => { dispatch({ type: "TRIP-TYPE", payload: e.target.value }) }}

                    />
                    <label htmlFor="One-Way-Trip">One Way Trip</label>
                  </div>
                  <div className='col-4 from-input'>
                    <input
                      type="radio"
                      id='Round-Trip'
                      name='trip-type'
                      value="Round Trip"
                      checked={state.triptype === 'Round Trip'}
                      onChange={(e) => { dispatch({ type: "TRIP-TYPE", payload: e.target.value }) }}

                    />
                    <label htmlFor="Round-Trip">Round Trip</label>
                  </div>
                  <div className='col-4 from-input'>
                    <input
                      type="radio"
                      id='Hourly-Trip'
                      name='trip-type'
                      value="Hourly Trip"
                      checked={state.triptype === 'Hourly Trip'}
                      onChange={(e) => { dispatch({ type: "TRIP-TYPE", payload: e.target.value }) }}

                    />
                    <label htmlFor="Hourly-Trip">Hourly Trip</label>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-4'>
                    <label htmlFor="From">From</label>
                    <input type="text"
                      id='From'
                      value={state.from}
                      placeholder="Gandhipuram, Tamil Nadu, India"
                      onChange={(e) => { dispatch({ type: "FROM", payload: e.target.value }) }} />

                  </div>
                
                  <div className='col-4'>
                    <label htmlFor="From">From</label>
                    <input type="text"
                      id='From'
                      value={state.to}
                      placeholder="Salem, Tamil Nadu, India"
                      onChange={(e) => { dispatch({ type: "TO", payload: e.target.value }) }} />

                  </div>

                  <div className='col-4'>
                    <label htmlFor="Date">Date</label>
                    <input type="text"
                      id='Date'
                      value={state.date}
                      placeholder={state.date}
                      onChange={(e) => { dispatch({ type: "Date", payload: e.target.value }) }} />

                  </div>
                </div>

                <div className='row'>
                  <div className='col-4'>
                    <label htmlFor="From">Pick Up Location</label>
                    <input type="text"
                      id='Pick-Up-Location'
                      value={state.PickUpLocation}
                      placeholder="Gandhipuram, Tamil Nadu, India"
                      onChange={(e) => { dispatch({ type: "PICK-UP-LOCATION", payload: e.target.value }) }} />

                  </div>
                
                  <div className='col-4'>
                    <label htmlFor="From">From</label>
                    <input type="text"
                      id='From'
                      value={state.to}
                      placeholder="Salem, Tamil Nadu, India"
                      onChange={(e) => { dispatch({ type: "TO", payload: e.target.value }) }} />

                  </div>

                  <div className='col-4'>
                    <label htmlFor="Date">Date</label>
                    <input type="text"
                      id='Date'
                      value={state.date}
                      placeholder={state.date}
                      onChange={(e) => { dispatch({ type: "Date", payload: e.target.value }) }} />

                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="container ">
            <div className="row home-banner">
              <div className="col-lg-6">
                <h3>A bus rental that's affordable and comfortable</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore iste beatae, nam eveniet velit consectetur, accusantium reprehenderit quia saepe laudantium ratione ipsa omnis sunt obcaecati facilis quisquam similique. Quidem?</p>
                <div className="row ">
                  <div className="col-lg-6">
                    <h2 className='home-banner-text'>25 + </h2>
                    <h5>Bus Ready</h5>
                    <p>Sed nunc si consectetur convallis facilisis dictumst nibh.</p>
                  </div>
                  <div className="col-lg-6">
                    < h2 className='home-banner-text'>97 %</h2>
                    <h5>Bus Ready</h5>
                    <p>Sed nunc si consectetur convallis facilisis dictumst nibh.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="home-banner-img">
                  <img src="./images/home-img.webp" alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row p-5 ">
            <div className="col-lg-4">
              <h5>WHO WE ARE
              </h5>
              <h3>Enjoy the journey – travel with us</h3>
            </div>
            <div className="col-lg-8">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni non eveniet, consequatur quas vel quaerat voluptate animi! Sequi incidunt ipsa odit hic, itaque reprehenderit exercitationem ipsum asperiores quam voluptatibus earum.</p>
            </div>
          </div>
          <div className="row gap-0">
            <div className="col-lg-4">
              <img src="./images/bus.jpg" alt="" class="img-fluid" />
            </div>
            <div className="col-lg-4">
              <img src="./images/businterior1.jpg" class="img-fluid" alt="" />
            </div>
            <div className="col-lg-4">
              <img src="./images/businterior.jpg" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="container p-5">
            <h5 className='text-center'>OUR SERVICES </h5>
            <h3 className='text-center  mt-4'> We Provide Best Services For You</h3>
            <p className='text-center mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis inventore non dolorem delectus nesciunt harum perferendis, in, ullam assumenda distinctio libero, dolores molestias magnam rem. Ad doloribus labore dignissimos adipisci.</p>

          </div>
          <div className="row p-5 home-banner1-icons">
            <div className="col-lg-3 d-flex align-items-center justify-content-center">
              <div className="card">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="80" height="80" x="0" y="0" viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                  <g>
                    <g data-name="Layer 2">
                      <path d="M32 33a6 6 0 1 0-6-6 6 6 0 0 0 6 6zm0-10a4 4 0 1 1-4 4 4 4 0 0 1 4-4z" fill="#2E236C" opacity="0" data-original="#000000" />
                      <path d="M54 52a1 1 0 0 0 1-1v-8.5l6.2-4.65a2.87 2.87 0 0 0 1.14-2.29A2.84 2.84 0 0 0 60 32.77a2.78 2.78 0 0 0-2.13.43l-.91.6V13.1a1 1 0 0 0-.83-1L45 10.16V8a1 1 0 0 0-1-1h-4V2a1 1 0 0 0-1-1H25a1 1 0 0 0-1 1v5h-4a1 1 0 0 0-1 1v2.16L7.83 12.11a1 1 0 0 0-.83 1V33.8l-.9-.6a2.85 2.85 0 0 0-3.3 4.65L9 42.5V51a1 1 0 0 0 1 1v9H1v2h62v-2h-9zm-7-27a4 4 0 1 1-4 4 4 4 0 0 1 4-4zM26 3h12v4H26zm-5 26a4 4 0 1 1-4-4 4 4 0 0 1 4 4zM9 13.94l10-6.54V33.8l-0.9-0.6a2.85 2.85 0 0 0-3.3 4.65L9 42.5V51a1 1 0 0 0 1 1v9H1v2h62v-2h-9zm33 36H14v-6h27z" fill="#2E236C" opacity="1" />
                    </g>
                  </g>
                </svg>
                <div className="card-body">
                  <h5 className="card-title text-center">Corporate Travelers</h5>
                  <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center justify-content-center">
              <div className="card">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="80" height="80" x="0" y="0" viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                  <g>
                    <g data-name="Layer 2">
                      <path d="M32 33a6 6 0 1 0-6-6 6 6 0 0 0 6 6zm0-10a4 4 0 1 1-4 4 4 4 0 0 1 4-4z" fill="#2E236C" opacity="0" data-original="#000000" />
                      <path d="M54 52a1 1 0 0 0 1-1v-8.5l6.2-4.65a2.87 2.87 0 0 0 1.14-2.29A2.84 2.84 0 0 0 60 32.77a2.78 2.78 0 0 0-2.13.43l-.91.6V13.1a1 1 0 0 0-.83-1L45 10.16V8a1 1 0 0 0-1-1h-4V2a1 1 0 0 0-1-1H25a1 1 0 0 0-1 1v5h-4a1 1 0 0 0-1 1v2.16L7.83 12.11a1 1 0 0 0-.83 1V33.8l-.9-.6a2.85 2.85 0 0 0-3.3 4.65L9 42.5V51a1 1 0 0 0 1 1v9H1v2h62v-2h-9zm-7-27a4 4 0 1 1-4 4 4 4 0 0 1 4-4zM26 3h12v4H26zm-5 26a4 4 0 1 1-4-4 4 4 0 0 1 4 4zM9 13.94l10-6.54V33.8l-0.9-0.6a2.85 2.85 0 0 0-3.3 4.65L9 42.5V51a1 1 0 0 0 1 1v9H1v2h62v-2h-9zm33 36H14v-6h27z" fill="#2E236C" opacity="1" />
                    </g>
                  </g>
                </svg>
                <div className="card-body">
                  <h5 className="card-title text-center">Corporate Travelers</h5>
                  <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center justify-content-center">
              <div className="card">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="80" height="80" x="0" y="0" viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                  <g>
                    <g data-name="Layer 2">
                      <path d="M32 33a6 6 0 1 0-6-6 6 6 0 0 0 6 6zm0-10a4 4 0 1 1-4 4 4 4 0 0 1 4-4z" fill="#2E236C" opacity="0" data-original="#000000" />
                      <path d="M54 52a1 1 0 0 0 1-1v-8.5l6.2-4.65a2.87 2.87 0 0 0 1.14-2.29A2.84 2.84 0 0 0 60 32.77a2.78 2.78 0 0 0-2.13.43l-.91.6V13.1a1 1 0 0 0-.83-1L45 10.16V8a1 1 0 0 0-1-1h-4V2a1 1 0 0 0-1-1H25a1 1 0 0 0-1 1v5h-4a1 1 0 0 0-1 1v2.16L7.83 12.11a1 1 0 0 0-.83 1V33.8l-.9-.6a2.85 2.85 0 0 0-3.3 4.65L9 42.5V51a1 1 0 0 0 1 1v9H1v2h62v-2h-9zm-7-27a4 4 0 1 1-4 4 4 4 0 0 1 4-4zM26 3h12v4H26zm-5 26a4 4 0 1 1-4-4 4 4 0 0 1 4 4zM9 13.94l10-6.54V33.8l-0.9-0.6a2.85 2.85 0 0 0-3.3 4.65L9 42.5V51a1 1 0 0 0 1 1v9H1v2h62v-2h-9zm33 36H14v-6h27z" fill="#2E236C" opacity="1" />
                    </g>
                  </g>
                </svg>
                <div className="card-body">
                  <h5 className="card-title text-center">Corporate Travelers</h5>
                  <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center justify-content-center">
              <div className="card">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="80" height="80" x="0" y="0" viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                  <g>
                    <g data-name="Layer 2">
                      <path d="M32 33a6 6 0 1 0-6-6 6 6 0 0 0 6 6zm0-10a4 4 0 1 1-4 4 4 4 0 0 1 4-4z" fill="#2E236C" opacity="0" data-original="#000000" />
                      <path d="M54 52a1 1 0 0 0 1-1v-8.5l6.2-4.65a2.87 2.87 0 0 0 1.14-2.29A2.84 2.84 0 0 0 60 32.77a2.78 2.78 0 0 0-2.13.43l-.91.6V13.1a1 1 0 0 0-.83-1L45 10.16V8a1 1 0 0 0-1-1h-4V2a1 1 0 0 0-1-1H25a1 1 0 0 0-1 1v5h-4a1 1 0 0 0-1 1v2.16L7.83 12.11a1 1 0 0 0-.83 1V33.8l-.9-.6a2.85 2.85 0 0 0-3.3 4.65L9 42.5V51a1 1 0 0 0 1 1v9H1v2h62v-2h-9zm-7-27a4 4 0 1 1-4 4 4 4 0 0 1 4-4zM26 3h12v4H26zm-5 26a4 4 0 1 1-4-4 4 4 0 0 1 4 4zM9 13.94l10-6.54V33.8l-0.9-0.6a2.85 2.85 0 0 0-3.3 4.65L9 42.5V51a1 1 0 0 0 1 1v9H1v2h62v-2h-9zm33 36H14v-6h27z" fill="#2E236C" opacity="1" />
                    </g>
                  </g>
                </svg>
                <div className="card-body">
                  <h5 className="card-title text-center">Corporate Travelers</h5>
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