import React, { Fragment, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCar, getAllCar } from '../Slice/carsSlice';
import { Link, useNavigate } from 'react-router-dom';
import Admin from "../Pages/Admin";

function Table() {
    const dispatch = useDispatch();
    const cars = useSelector(state => state.Cars.Cars || []);
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/v1/delete/${id}`);
            dispatch(deleteCar({ id }));
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/allCars`);
                dispatch(getAllCar(response.data.Cars));
                navigate('/table')
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, [dispatch]);

    return (
        // <Fragment>
        //     <Admin />
        //     <div className="container mb-3">
        //         <div className="table-add mt-4">
        //             <Link to='/admin/create'>
        //                 <button><i className="fa-solid fa-plus"></i> Add</button>
        //             </Link>
        //         </div>
        //         {
        //             cars.map((car, index) => (
        //                 <div className="row car-detail mt-4" key={index}>
        //                     <div className="col-lg-2 mt-2">
        //                         <img
        //                             src={`http://localhost:8000/${car.imageUrl}`}
        //                             alt="Car not visible"
        //                             className="img-fluid"
        //                         />
        //                     </div>

        //                     <div className="col-lg-9">
        //                         <div className="row car-details">
        //                             <div className="index col-lg-3">
        //                                 <label>S.no: {index + 1}</label>
        //                             </div>
        //                             <div className="model col-lg-3">
        //                                 <label>Model: {car.carModel}</label>
        //                             </div>
        //                             <div className="brand col-lg-3">
        //                                 <label>Brand: {car.brand}</label>
        //                             </div>
        //                             <div className="price col-lg-3">
        //                                 <label>Price: {car.price}</label>
        //                             </div>
        //                             <div className="seats col-lg-3">
        //                                 <label>Seats: {car.seats}</label>
        //                             </div>
        //                             <div className="availability col-lg-3">
        //                                 <label>Availability: {car.availability ? "Yes" : "No"}</label>
        //                             </div>
        //                             <div className="category col-lg-3">
        //                                 <label>Category: {car.category}</label>
        //                             </div>
        //                             <div className="description">
        //                                 <label>Description: {car.description}</label>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="edit col-lg-1 mt-3">
        //                         <Link to={`/edit/${car.id}`}>
        //                             <button className='update'>
        //                                 <i className="fa-solid fa-pen-to-square"></i> Edit
        //                             </button>
        //                         </Link>
        //                         <button className='delete' onClick={() => handleDelete(car.id)}>
        //                             <i className="fa-solid fa-bucket"></i> Delete
        //                         </button>
        //                     </div>
        //                 </div>
        //             ))
        //         }
        //     </div>
        // </Fragment>

        <Fragment>
  <Admin />
  <div className="container mb-3 car-list">
    <div className="table-add mt-4">
      <Link to='/admin/create'>
        <button className="btn btn-primary add-button">
          <i className="fa-solid fa-plus"></i> Add
        </button>
      </Link>
    </div>
    {
      cars.map((car, index) => (
        <div className="row car-detail mt-4" key={index}>
          <div className="col-lg-2 col-md-4 col-sm-12 car-image mt-2">
            <img
              src={`http://localhost:8000/${car.imageUrl}`}
              alt="Car not visible"
              className="img-fluid"
            />
          </div>

          <div className="col-lg-9 col-md-7 col-sm-12 car-info">
            <div className="row car-details">
              <div className="index col-lg-3 col-sm-6">
                <label>S.no: {index + 1}</label>
              </div>
              <div className="model col-lg-3 col-sm-6">
                <label>Model: {car.carModel}</label>
              </div>
              <div className="brand col-lg-3 col-sm-6">
                <label>Brand: {car.brand}</label>
              </div>
              <div className="price col-lg-3 col-sm-6">
                <label>Price: {car.price}</label>
              </div>
              <div className="seats col-lg-3 col-sm-6">
                <label>Seats: {car.seats}</label>
              </div>
              <div className="availability col-lg-3 col-sm-6">
                <label>Availability: {car.availability ? "Yes" : "No"}</label>
              </div>
              <div className="category col-lg-3 col-sm-6">
                <label>Category: {car.category}</label>
              </div>
              <div className="description col-lg-12">
                <label>Description: {car.description}</label>
              </div>
            </div>
          </div>

          <div className="edit col-lg-1 col-md-1 col-sm-12 mt-3">
            <Link to={`/edit/${car.id}`}>
              <button className="btn btn-warning update">
                <i className="fa-solid fa-pen-to-square"></i> Edit
              </button>
            </Link>
            <button className="btn btn-danger delete mt-2" onClick={() => handleDelete(car.id)}>
              <i className="fa-solid fa-bucket"></i> Delete
            </button>
          </div>
        </div>
      ))
    }
  </div>
</Fragment>


       

    );
}

export default Table;
