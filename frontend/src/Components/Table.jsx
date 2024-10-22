import React, { Fragment, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCar, getAllCar } from '../Slice/carsSlice'; // Adjust the import path based on your folder structure
import { Link, useNavigate } from 'react-router-dom';
import Admin from "../Pages/Admin"; // Adjust the import path based on your folder structure

function Table() {
  const dispatch = useDispatch();
  const cabs = useSelector(state => state.Cabs.Cabs || []); // Ensure state structure is correct
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_ALL_CARS}/delete/${id}`);
      dispatch(deleteCar({ id }));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_ALL_CARS}/allCars`);
        dispatch(getAllCar(response.data.Cabs));
        navigate('/table'); // Ensure this path is correct
      } catch (error) {
        console.error('Error fetching cars:', error.message);
      }
    };
    fetchData();
  }, [dispatch, navigate]);

  return (
    <Fragment>
      <Admin />
      <div className="tour-container">
        <div className="d-flex justify-content-between">
          <h2 className="tour-header">Manage Cabs</h2>
          <div className="table-add">
            <Link to='/admin/create'>
              <button className="add-button"><i className="fa-solid fa-plus"></i> Add Cab</button>
            </Link>
          </div>
        </div>

        {cabs.length > 0 ? (
          <div className="car-grid">
            {cabs.map((car, index) => (
              <div className="tour-card" key={car.id}>
                <div className="tour-image">
                  <img
                    src={`https://saranamayyappatravels-fp8c.vercel.app/${car.imageUrl}`} // Ensure the image URL is correct
                    alt="Car not visible"
                    className="img-fluid"
                  />
                </div>

                <div className="tour-details">
                  <h5>S.no: {index + 1}</h5>
                  <p>Model: <strong>{car.cabModel}</strong></p>
                  <p>Brand: <strong>{car.brand}</strong></p>
                  <p>Seats: <strong>{car.seats}</strong></p>
                  <p>On Ride: <strong>{car.onRide}</strong></p> {/* Display onRide field */}
                  <p>Category: <strong>{car.category}</strong></p>
                  <p>Description: {car.description}</p>
                  <p>Local Trip Type: <strong>{car.localTripType ? Object.keys(car.localTripType).join(', ') : 'N/A'}</strong></p> {/* Display localTripType */}

                  {/* Conditional Rendering for Price Details */}
                  {car.pricePerday && (
                    <div className="price-details">
                      {car.pricePerday['0-400'] && (
                        <p>
                          0-400 km: ₹{car.pricePerday['0-400'].price}
                        </p>
                      )}
                      {car.pricePerday['>400'] && (
                        <p>
                          400 km: ₹{car.pricePerday['>400'].price}
                          <br />
                          Km Charge: ₹{car.pricePerday['>400'].kmCharge}
                          <br />
                          Driver Beta: ₹{car.pricePerday['>400'].driverBeta}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="tour-actions">
                  <Link to={`/edit/${car.id}`}>
                    <button className='action-button update-btn'>
                      <i className="fa-solid fa-pen-to-square"></i> Edit
                    </button>
                  </Link>
                  <button className='action-button delete-btn' onClick={() => handleDelete(car.id)}>
                    <i className="fa-solid fa-bucket"></i> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No cars available.</p>
        )}
      </div>
    </Fragment>
  );
}

export default Table;
