// import React, { useEffect, useState }  from 'react'
// import { useLocation } from 'react-router-dom'

// const Cars= () => {

//   const {state}=useLocation()
//   const [cars,setCars]=useState([])

//   useEffect(()=>{
//     console.log(state.triptype);
//     fetch(`http://localhost:8000/api/v1/allcars?category=${state.triptype}`)
//     .then((res)=>{res.json()})
//     .then((json)=>{
//       console.log(json);
//       setCars(json.Cars)})

//   },[state.triptype])

//   return (
//     <section className='all-cabs container'>
//         <div className='row'>
//             <div className='col-12'>
//                 <h2>Available Cabs</h2>
//                 <div>
//                     <img src="" alt="img" />
//                     <h5>Honda</h5>
//                     <p>5 seater</p>
//                     <p>A reliable and fuel-efficient sedan</p>
//                     <p>price-1000</p>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Cars

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Cars = () => {
    const { state } = useLocation();
    const [cars, setCars] = useState([]);

    useEffect(() => {
        console.log(state.triptype);
        fetch(`http://localhost:8000/api/v1/allcars?category=${state.triptype}`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                if (json.success) {
                    setCars(json.Cars);
                }
            })
            .catch(error => {
                console.error('Error fetching cars:', error);
            });
    }, [state.triptype]);

    return (
        <section className='all-cabs container'>
            <div className='row'>
                <div className='col-12'>
                    <h2>Available Cabs</h2>
                    {cars.length > 0 ? (
                        cars.map((car, index) => (
                            <div key={index}>
                                <img src={car.image} alt="Car" />
                                <h5>{car.name}</h5>
                                <p>{car.seats }</p>
                                <p>{car.description }</p>
                                <p>price-{car.price }</p>
                            </div>
                        ))
                    ) : (
                        <p>No cars available</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Cars;
