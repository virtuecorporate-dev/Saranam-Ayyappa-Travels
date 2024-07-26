import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Cars = () => {

    const { state } = useLocation()
    const [cars, setCars] = useState([])

    useEffect(() => {
        console.log(state.triptype);
        fetch(`http://localhost:8000/api/v1/avaibleCars?category=${state.triptype}`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setCars(json.Cars)

            })

    }, [state.triptype])

    const navigate = useNavigate()
    const SelectCab = (cab) => {
        navigate("/confirmbooking", { state: { ...state, selectedCab: cab } })
    }

    return (
        <section className='all-cabs container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='avail-cars'>
                        <h2>Showing {cars.length} Available Cabs</h2>
                    </div>

                    <div className='container'>
                        <div className='row'>
                                {cars.length > 0 ? cars.map((car, index) => {

                                    return (
                                        <div key={index} className='col-4 cabs' >
                                            <div className='cab-img'>
                                                <img src={car.imageUrl} alt="img" />
                                            </div>

                                            <h5>{car.brand}</h5>
                                            <p>{car.seats} seater</p>
                                            <p>{car.description}</p>
                                            <p>price - {car.price}</p>

                                            <button type='button' onClick={() => {
                                                console.log(car);
                                                SelectCab(car)
                                            }}>Select</button>
                                        </div>


                                    )
                                })
                                    : <p>No Cars Available</p>
                                }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Cars

