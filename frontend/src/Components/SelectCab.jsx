import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SelectCab = ({ state, dispatch }) => {

    const [openPopUp, SetOpenPopUp] = useState(false)

    const openPopup = () => {
        SetOpenPopUp(true)
        document.body.classList.add('dull-background');
    }
    const closePopup = () => {
        SetOpenPopUp(false)
        document.body.classList.remove('dull-background');
    }

    const [cabs, setCabs] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/api/v1/avaibleCars?category=${state.triptype}`)
        // fetch(`http://localhost:8000/api/v1/allFilteredCabs?category=${state.triptype}&seats=${state.NumberOfPersons}&distance=${state.distance}`)


            .then((res) => res.json())
            .then((json) => {
                console.log(json);

                setCabs(json.Cars)
            })
    })

    return (
        <>
            <div className='col-6'>

                <label htmlFor="SelectCab">Select Cab</label> <br />
                <input type="text" className='input-field'
                    id='SelectCab'
                    value={state.CabType}
                    placeholder="Select the Cab"
                    // required
                    onChange={(e) => { dispatch({ type: "CAB-TYPE", payload: e.target.value }) }}
                    onClick={openPopup}
                />
            </div>

            {openPopUp &&

                <div className="slider-popup">
                    {/* <button  style={{border:"1px solid red"}}> */}
                    <div onClick={closePopup}>
                        <i class="fa-solid fa-x close-btn"></i>
                    </div>
                    {/* </button> */}
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {cabs.map((cabs) => (
                            <SwiperSlide style={{ color: "black" }}>
                                <div className='col-12 cabs ' >
                                    <div className='cab-inner'>

                                        <div className='cab-img'>
                                            <img src={cabs.imageUrl} alt="img" />
                                        </div>

                                        <div className='cab-details-content container mt-3'>
                                            <div className='row'>
                                                <div className='col-8' >
                                                    <div className='car-name-details'>
                                                        <h3 >{cabs.brand} {cabs.carModel}</h3>
                                                    </div>

                                                    <div className='car-description'>
                                                        <p>Manual - Petrol - {cabs.seats} seats</p>



                                                    </div>



                                                </div>

                                                <div className="col-4 p-0" >
                                                    <div className='cab-fare-inner'>
                                                        <h3 className='cab-fare'> ₹{cabs.price}</h3>
                                                        <p className='cab-fees'>₹1000 excluding fees</p>


                                                    </div>

                                                </div>
                                            </div>

                                            <div className='dotted-line'></div>

                                            <div className='row'>
                                                <div className='col-12'>
                                                    <p className='pt-3' style={{ textWrap: "wrap" }}>{cabs.description}</p>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className="col-8 ">
                                                    <p className='extra-fea'>Active Fastag</p>

                                                </div>
                                                <div className='col-4 p-0'>
                                                    <button className='select-button' type='button' onClick={() => {
                                                        console.log(cabs);
                                                        SelectCab(cabs)
                                                    }}>Select
                                                    </button>
                                                </div>
                                            </div>


                                        </div>



                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}

                        {/* <SwiperSlide style={{ height: "100px", color: "black" }}>
                                <div className=''>Slide 2</div></SwiperSlide>
                            <SwiperSlide style={{ height: "100px", color: "black" }}>
                                <div className=''>Slide 3</div></SwiperSlide>
                            <SwiperSlide style={{ height: "100px", color: "black" }}>
                                <div className=''>Slide 4</div></SwiperSlide> */}

                    </Swiper>
                </div>



            }

        </>


    )
}

export default SelectCab