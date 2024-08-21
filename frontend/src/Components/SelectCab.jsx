// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/swiper-bundle.css';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// const SelectCab = ({ state, dispatch }) => {

//     const [openPopUp, SetOpenPopUp] = useState(false)

//     const openPopup = () => {
//         if (state.triptype && state.NumberOfPersons && state.distance) {
//             SetOpenPopUp(true)
//             document.body.classList.add('dull-background')
//         }

//         if (!state.triptype && !state.NumberOfPersons && !state.distance) {
//             alert("Please fill in all the details");
//         } else {
//             if (!state.triptype) {
//                 alert("Please choose the trip type");
//             }
//             if (!state.NumberOfPersons) {
//                 alert("Please fill the number of persons");
//             }
//             if (!state.distance) {
//                 alert("Please fill the distance");
//             }
//         }
//     }
//     const closePopup = () => {
//         SetOpenPopUp(false)
//         document.body.classList.remove('dull-background');
//     }

//     const [cabs, setCabs] = useState([])

//     useEffect(() => {
//         if (state.triptype && state.NumberOfPersons && state.distance) {
//             fetch(`http://localhost:8000/api/v1/allFilteredCabs?category=${state.triptype}&seats=${state.NumberOfPersons}&distance=${state.distance}`)


//                 .then((res) => res.json())
//                 .then((json) => {
//                     console.log(json);

//                     setCabs(json.filteredCabs)
//                     console.log(cabs);

//                 })
//         }
//     }, [state.triptype, state.NumberOfPersons, state.distance])

//     const handleSelectCab = (cab) => {

//         cab = `${cab.brand} ${cab.carModel} - ${cab.seats} Seater`
//         // const fareForCab = cabs.pricePerKm[priceRange].totalFare || (cabs.pricePerKm[priceRange].price * state.distance);
//         // dispatch({ type: "FARE", payload: fareForCab });
//         dispatch({ type: "CAB-TYPE", payload: cab })
//         const fareForCab = cabs.pricePerKm[priceRange].totalFare || (cabs.pricePerKm[priceRange].price * state.distance);
//         dispatch({ type: "FARE", payload: fareForCab });
//         closePopup()
//     }

//     const getPriceRange = (distance) => {
//         if (distance >= 0 && distance <= 25) return "0-25";
//         if (distance > 25 && distance <= 50) return "26-50";
//         if (distance > 50 && distance <= 75) return "51-75";
//         if (distance > 75 && distance <= 100) return "76-100";
//         if (distance > 100 && distance <= 150) return "101-150";
//         if (distance > 150 && distance <= 200) return "151-200";
//         if (distance > 200 && distance <= 250) return "201-250";
//         if (distance > 250) return ">300";
//         return null;
//     };

//     const priceRange = getPriceRange(state.distance);

//     // const [totalfare, setTotalFare]=useState(cabs.pricePerKm[priceRange].totalFare)



//     return (
//         <>
//             <div className='col-6'>

//                 <label htmlFor="SelectCab">Select Cab</label> <br />
//                 <input type="text" className='input-field'
//                     id='SelectCab'
//                     value={state.CabType}
//                     placeholder="Select the Cab"
//                     // required
//                     onChange={(e) => { dispatch({ type: "CAB-TYPE", payload: e.target.value }) }}
//                     onClick={openPopup}
//                 />
//             </div>
//             <div className='col-6 text-right' >
//                 {/* <label htmlFor="Fare">Fare (Rs)</label> */}
//                 <p className='fare-text mt-4' style={{ color: "black" }}>
//                     approx&nbsp;<b style={{ fontSize: "30px" }}>₹{ fareForCab}</b>
//                 </p>
//                 <Link to="/terms&conditions">
//                     <p className='fare-explanation' style={{ color: "black", marginTop: "-20px", fontSize: "10px", textAlign: "right" }}>
//                         Terms & conditions Applicable
//                     </p>
//                 </Link>

//             </div>

//             {openPopUp &&

//                 <div className="slider-popup">
//                     {/* <button  style={{border:"1px solid red"}}> */}
//                     <div onClick={closePopup}>
//                         <i class="fa-solid fa-x close-btn"></i>
//                     </div>
//                     {/* </button> */}
//                     <Swiper
//                         modules={[Navigation, Pagination, Scrollbar, A11y]}
//                         spaceBetween={50}
//                         slidesPerView={1}
//                         navigation
//                         pagination={{ clickable: true }}
//                         onSwiper={(swiper) => console.log(swiper)}
//                     // onSlideChange={() => console.log('slide change')}
//                     >
//                         {cabs && cabs.length > 0 ? (

//                             cabs.map((cabs) => {

//                                 const totalFare = cabs.pricePerKm[priceRange].totalFare;
//                                 const FareForCab = totalFare || (cabs.pricePerKm[priceRange].price * state.distance)

//                                 return (
//                                     <SwiperSlide key={cabs._id} style={{ color: "black" }}>
//                                         <div className='col-12 cabs ' >
//                                             <div className='cab-inner'>

//                                                 <div className='cab-img'>
//                                                     <img src={cabs.imageUrl} alt="img" />
//                                                 </div>

//                                                 <div className='cab-details-content container mt-3'>
//                                                     <div className='row'>
//                                                         <div className='col-8' >
//                                                             <div className='car-name-details'>
//                                                                 <h3 >{cabs.brand} {cabs.carModel}</h3>
//                                                             </div>

//                                                             <div className='car-description'>
//                                                                 <p>Manual - Petrol - {cabs.seats} seats</p>



//                                                             </div>



//                                                         </div>

//                                                         <div className="col-4 p-0" >
//                                                             <div className='cab-fare-inner'>
//                                                                 <h3 className='cab-fare'> ₹{FareForCab}</h3>
//                                                                 {/* <p className='cab-fees'>₹1000 excluding fees</p> */}


//                                                             </div>

//                                                         </div>
//                                                     </div>

//                                                     <div className='dotted-line'></div>

//                                                     <div className='row'>
//                                                         <div className='col-12'>
//                                                             <p className='pt-3' style={{ textWrap: "wrap" }}>{cabs.description}</p>
//                                                         </div>
//                                                     </div>

//                                                     <div className='row'>
//                                                         <div className="col-8 ">
//                                                             {/* <p className='extra-fea'>Active Fastag</p> */}
//                                                             <p className='extra-fea'>{cabs.pricePerKm[priceRange].price}{cabs.pricePerKm[priceRange].additionalInfo}</p>

//                                                         </div>
//                                                         <div className='col-4 p-0'>
//                                                             <button className='select-button' type='button' onClick={() => {
//                                                                 console.log(cabs);
//                                                                 handleSelectCab(cabs)
//                                                             }}>Select
//                                                             </button>
//                                                         </div>
//                                                     </div>


//                                                 </div>



//                                             </div>

//                                         </div>
//                                     </SwiperSlide>
//                                 )
//                             })

//                         ) : (
//                             <div style={{ color: "black" }}>No cabs available</div>
//                         )}

//                         {/* <SwiperSlide style={{ height: "100px", color: "black" }}>
//                                 <div className=''>Slide 2</div></SwiperSlide>
//                             <SwiperSlide style={{ height: "100px", color: "black" }}>
//                                 <div className=''>Slide 3</div></SwiperSlide>
//                             <SwiperSlide style={{ height: "100px", color: "black" }}>
//                                 <div className=''>Slide 4</div></SwiperSlide> */}

//                     </Swiper>
//                 </div>



//             }

//         </>


//     )
// }

// export default SelectCab

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SelectCab = ({ state, dispatch }) => {
    const [openPopUp, SetOpenPopUp] = useState(false);
    const [cabs, setCabs] = useState([]);

    const openPopup = () => {
        if (state.triptype && state.NumberOfPersons && state.distance) {
            SetOpenPopUp(true);
            document.body.classList.add('dull-background');
        } else {
            if (!state.triptype) {
                alert("Please choose the trip type");
            }
            if (!state.NumberOfPersons) {
                alert("Please fill the number of persons");
            }
            if (!state.distance) {
                alert("Please fill the distance");
            }
        }
    };

    const closePopup = () => {
        SetOpenPopUp(false);
        document.body.classList.remove('dull-background');
    };

    const getPriceRange = (distance) => {
        if (distance >= 0 && distance <= 25) return "0-25";
        if (distance > 25 && distance <= 50) return "26-50";
        if (distance > 50 && distance <= 75) return "51-75";
        if (distance > 75 && distance <= 100) return "76-100";
        if (distance > 100 && distance <= 150) return "101-150";
        if (distance > 150 && distance <= 200) return "151-200";
        if (distance > 200 && distance <= 250) return "201-250";
        if (distance > 250) return ">300";
        return null;
    };

    useEffect(() => {
        if (state.triptype && state.NumberOfPersons && state.distance) {
            fetch(`http://localhost:8000/api/v1/allFilteredCabs?category=${state.triptype}&seats=${state.NumberOfPersons}&distance=${state.distance}`)
                .then((res) => res.json())
                .then((json) => {
                    setCabs(json.filteredCabs);
                });
        }
    }, [state.triptype, state.NumberOfPersons, state.distance]);

    const handleSelectCab = (cab) => {
        const priceRange = getPriceRange(state.distance);
        const fareForCab = cab.pricePerKm[priceRange].totalFare || (cab.pricePerKm[priceRange].price * state.distance);

        const selectedCab = `${cab.brand} ${cab.carModel} - ${cab.seats} Seater`;
        dispatch({ type: "CAB-TYPE", payload: selectedCab });
        dispatch({ type: "FARE", payload: fareForCab });
        closePopup();
    };

    return (
        <>
            <div className='col-6'>
                <label htmlFor="SelectCab">Select Cab</label> <br />
                <input
                    type="text"
                    className='input-field'
                    id='SelectCab'
                    value={state.CabType}
                    placeholder="Select the Cab"
                    onChange={(e) => { dispatch({ type: "CAB-TYPE", payload: e.target.value }) }}
                    onClick={openPopup}
                />
            </div>
            <div className='col-6 text-right'>
                <p className='fare-text mt-4' style={{ color: "black" }}>
                    approx&nbsp;<b style={{ fontSize: "30px" }}>₹{state.fare}</b>
                </p>
                <Link to="/terms&conditions">
                    <p className='fare-explanation' style={{ color: "black", marginTop: "-20px", fontSize: "10px", textAlign: "right" }}>
                        Terms & conditions Applicable
                    </p>
                </Link>
            </div>

            {openPopUp &&
                <div className="slider-popup">
                    <div onClick={closePopup}>
                        <i className="fa-solid fa-x close-btn"></i>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {cabs && cabs.length > 0 ? (
                            cabs.map((cab) => {
                                const priceRange = getPriceRange(state.distance);
                                const fareForCab = cab.pricePerKm[priceRange].totalFare || (cab.pricePerKm[priceRange].price * state.distance);

                                return (
                                    <SwiperSlide key={cab._id} style={{ color: "black" }}>
                                        <div className='col-12 cabs'>
                                            <div className='cab-inner'>
                                                <div className='cab-img'>
                                                    <img src={cab.imageUrl} alt="img" />
                                                </div>
                                                <div className='cab-details-content container mt-3'>
                                                    <div className='row'>
                                                        <div className='col-8'>
                                                            <div className='car-name-details'>
                                                                <h3>{cab.brand} {cab.carModel}</h3>
                                                            </div>
                                                            <div className='car-description'>
                                                                <p>Manual - Petrol - {cab.seats} seats</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-4 p-0">
                                                            <div className='cab-fare-inner'>
                                                                <h3 className='cab-fare'> ₹{fareForCab}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='dotted-line'></div>
                                                    <div className='row'>
                                                        <div className='col-12'>
                                                            <p className='pt-3' style={{ textWrap: "wrap" }}>{cab.description}</p>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className="col-8">
                                                            <p className='extra-fea'>{cab.pricePerKm[priceRange].price}{cab.pricePerKm[priceRange].additionalInfo}</p>
                                                        </div>
                                                        <div className='col-4 p-0'>
                                                            <button className='select-button' type='button' onClick={() => handleSelectCab(cab)}>
                                                                Select
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })
                        ) : (
                            <div style={{ color: "black" }}>No cabs available</div>
                        )}
                    </Swiper>
                </div>
            }
        </>
    );
};

export default SelectCab;
