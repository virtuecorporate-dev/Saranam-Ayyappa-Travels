import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCar, getAllCar } from '../Slice/carsSlice';
import { Link } from 'react-router-dom';

function Table() {
    const dispatch = useDispatch();
    const cars = useSelector(state => state.Cars.Cars || [])
    

    const handleDelete = (id) => {
        try {
            const response1 = axios.delete(`http://localhost:8000/api/v1/delete/${id}`)
            dispatch(deleteCar(response1({ id })))
        } catch (error) {

        }
    }

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/allCars`);
                dispatch(getAllCar(response.data.Cars));
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData();

    })


    return (
        <Fragment>
               <div className="container mb-3">
                <div className="table-add mt-4">

                    <Link to='/admin/create'>

                        <button><i class="fa-solid fa-plus"></i> Add</button>
                    </Link>
                    </div>
                {
                    cars.map((car, index) => (
                        <div className="row car-detail mt-4" key={index}>
                            <div className="col-lg-2 mt-2">
                                <img
                                    src={car.imageUrl}
                                    alt=""
                                    className="img-fluid"
                                />                          
                             </div>
                            <div className="col-lg-9">
                                <div className="row car-details">
                                <div className="index col-lg-3">
                                    <label htmlFor={`index-${index}`}>S.no: {index + 1}</label>
                                </div>
                                <div className="model col-lg-3">
                                    <label htmlFor="brand">Model:{car.carModel}</label>
                                </div>
                                <div className="brand col-lg-3">
                                    <label htmlFor="brand">Brand:{car.brand}</label>
                                </div>
                                <div className="price col-lg-3">
                                    <label htmlFor="price">Price:{car.price}</label>
                                </div>
                                <div className="seats col-lg-3">
                                    <label htmlFor="seats">Seats:{car.seats}</label>
                                </div>
                                <div className="availability col-lg-3">
                                    {
                                        car.availability ?<label htmlFor="availability">Availability:{car.availability} yes</label>:
                                        "No Available"

                                    }
                                </div>
                                <div className="category col-lg-3">
                                    <label htmlFor="category">Category:{car.category}</label>
                                </div>
                                <div className="description">
                                    <label htmlFor="description">Description:{car.description}</label>
                                </div>
                               
                                
                                </div>
                                
                               
                            </div>
                            <div className="edit col-lg-1 mt-3">
                                    <Link to={`/edit/${car.id}`}><button className='update'><i class="fa-solid fa-pen-to-square "></i>Edit</button>

                                    </Link>
                                    <button className='delete' onClick={() => handleDelete(car.id)}><i class="fa-solid fa-bucket "></i>Delete</button>
                                </div>
                        </div>
                    ))
                }
            </div>


        </Fragment>
    )
}

export default Table