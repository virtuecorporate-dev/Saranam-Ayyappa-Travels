import React, { Fragment, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCar, getAllCar } from '../Slice/carsSlice';
import { Link } from 'react-router-dom';

function Table() {
    const dispatch = useDispatch();
    const cars = useSelector(state => state.Cars.Cars || [])

    const handleDelete= (id)=>{
        try {
            const response1 = axios.delete(`http://localhost:8000/api/v1/delete/${id}`)
            dispatch (deleteCar(response1({id})))
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
            <Link to='/admin/create'>            <button>Add</button>
            </Link>
            <table class='table table-striped'>
                <thead>
                    <tr>
                        <td>S.No</td>
                        <td>carModel</td>
                        <td>brand</td>
                        <td>price</td>
                        <td>seats</td>
                        <td>availability</td>
                        <td>imageUrl</td>
                        <td>description</td>
                        <td>category</td>
                    </tr>

                </thead>
                <tbody>
                    {cars.map((car, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{car.carModel}</td>
                            <td>{car.brand}</td>
                            <td>{car.price}</td>
                            <td>{car.seats}</td>
                            <td>{car.availability}</td>
                            <img
                                src={car.imageUrl}
                                alt=""
                                className="img-fluid"
                                style={{ height: '200px', width: '200px' }}
                            />
                            <td>{car.description}</td>
                            <td>
                            {car.category}
                                </td>   
                                <Link to={`/edit/${car.id}`}><button>Edit</button>     
                                </Link>
                            <button onClick={()=>handleDelete(car.id)}>Delete</button>         
                            </tr>
                    })}

                </tbody>
            </table>
        </Fragment>
    )
}

export default Table