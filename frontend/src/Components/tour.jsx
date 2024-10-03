import axios from "axios";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTour, deleteTour } from "../Slice/toursSlice";
import { Link } from 'react-router-dom';
import Admin from "../Pages/Admin";


export default function Tour() {
    const dispatch = useDispatch();
    const tours = useSelector(state => state.tours.tours) || []; // Default to an empty array

    const handleDelete = async (id) => {
        try {
            // Make a DELETE request to the server
            await axios.delete(`http://localhost:8000/api/v1/deleteTour/${id}`);
            // Dispatch the deleteTour action with the id
            dispatch(deleteTour({ id }));
        } catch (error) {
            console.error("Failed to delete the tour", error.message);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/tour`);
                dispatch(getTour(response.data.tour));
            } catch (error) {
                console.log("cannot fetch data", error.message);
            }
        };

        fetchData();
    }, [dispatch]); // Added dependency array

    return (
        <Fragment>
            <Admin />
            <div className="container mb-3">
                <h2>Create Tour Page</h2>
                <div className="table-add mt-4">
                    <Link to='/tour/create'>
                        <button><i className="fa-solid fa-plus mb-2"></i> Add</button>
                    </Link>
                </div>
                {tours.length > 0 ? ( // Check if tours have data before mapping
                    tours.map((tour, index) => (
                        <div className="row car-detail" key={tour.id}>
                            <div className="col-lg-2">
                                <img
                                    src={`http://localhost:8000/${tour.imageUrl}`}
                                    alt="Holiday Image"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-lg-8">
                                <div className="row car-details">
                                    <div className="col-lg-2">
                                        <label htmlFor={`index:${index}`}>Sno {index + 1}</label>
                                    </div>
                                    <div className="col-lg-2">
                                        <label htmlFor="name">Name : {tour.name}</label>
                                    </div>
                                    <div className="col-lg-2">
                                        <h5>Services</h5>
                                        <ul>
                                            {tour.services.map((ser, i) => (
                                                <li key={i}>{ser.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-lg-2">
                                        <label htmlFor="category">Category :
                                            <ul>
                                                <li>{tour.category}</li>
                                            </ul>
                                        </label>
                                    </div>
                                    <div className="col-lg-2">
                                        <label htmlFor="noOfPersons">No Of persons :
                                            <ul>
                                                <li>{tour.numberOfPersons}</li> {/* Corrected from category */}
                                            </ul>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 holiday-pdf">
                                <label htmlFor="pdf"> <h6>pdf</h6>
                                </label>


                                {tour.pdf && (
                                    <a
                                        href={`http://localhost:8000/${tour.pdf}`}  // URL to the PDF file
                                        target="_blank"      // Opens the PDF in a new tab or window
                                        rel="noopener noreferrer"
                                        className="btn btn-primary "
                                    >
                                        Download PDF
                                    </a>

                                )}
                            </div>
                            <div className="holiday-actions col-lg-1 mt-3">
                                <Link to={`/tourEdit/${tour.id}`}>
                                    <button className="holiday-update-btn"><i className="fa-solid fa-pen-to-square"></i> Update</button>
                                </Link>
                                <button onClick={() => handleDelete(tour.id)} className="holiday-delete-btn">
                                    <i className="fa-solid fa-bucket"></i> Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No tours available.</p> // Message when no tours are available
                )}
            </div>
        </Fragment>
    );
}
