// import axios from "axios";
// import { Fragment, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getTour, deleteTour } from "../Slice/toursSlice";
// import { Link } from 'react-router-dom';
// import Admin from "../Pages/Admin";


// export default function Tour() {
//     const dispatch = useDispatch();
//     const tours = useSelector(state => state.tours.tours) || []; // Default to an empty array

//     const handleDelete = async (id) => {
//         try {
//             // Make a DELETE request to the server
//             await axios.delete(`${process.env.REACT_APP_ALL_CARS}/deleteTour/${id}`);
//             // Dispatch the deleteTour action with the id
//             dispatch(deleteTour({ id }));
//         } catch (error) {
//             console.error("Failed to delete the tour", error.message);
//         }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`${process.env.REACT_APP_ALL_CARS}/tour`);
//                 dispatch(getTour(response.data.tour));
//             } catch (error) {
//                 console.log("cannot fetch data", error.message);
//             }
//         };

//         fetchData();
//     }, [dispatch]); // Added dependency array

//     return (
//         <Fragment>
//             <Admin />
//             <div className="container mb-3">
//                 <h2>Create Tour Page</h2>
//                 <div className="table-add mt-4">
//                     <Link to='/tour/create'>
//                         <button><i className="fa-solid fa-plus mb-2"></i> Add</button>
//                     </Link>
//                 </div>
//                 {tours.length > 0 ? ( // Check if tours have data before mapping
//                     tours.map((tour, index) => (
//                         <div className="row car-detail" key={tour.id}>
//                             <div className="col-lg-2">
//                                 <img
//                                     src={`https://saranamayyappatravels-fp8c.vercel.app/${tour.imageUrl}`}
//                                     alt="Holiday Image"
//                                     className="img-fluid"
//                                 />
//                             </div>
//                             <div className="col-lg-8">
//                                 <div className="row car-details">
//                                     <div className="col-lg-2">
//                                         <label htmlFor={`index:${index}`}>Sno {index + 1}</label>
//                                     </div>
//                                     <div className="col-lg-2">
//                                         <label htmlFor="name">Name : {tour.name}</label>
//                                     </div>
//                                     <div className="col-lg-2">
//                                         <h5>Services</h5>
//                                         <ul>
//                                             {tour.services.map((ser, i) => (
//                                                 <li key={i}>{ser.name}</li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                     <div className="col-lg-2">
//                                         <label htmlFor="category">Category :
//                                             <ul>
//                                                 <li>{tour.category}</li>
//                                             </ul>
//                                         </label>
//                                     </div>
//                                     <div className="col-lg-2">
//                                         <label htmlFor="noOfPersons">No Of persons :
//                                             <ul>
//                                                 <li>{tour.numberOfPersons}</li> {/* Corrected from category */}
//                                             </ul>
//                                         </label>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-1 holiday-pdf">
//                                 <label htmlFor="pdf"> <h6>pdf</h6>
//                                 </label>


//                                 {tour.pdf && (
//                                     <a
//                                         href={`https://saranamayyappatravels-fp8c.vercel.app/${tour.pdf}`}  // URL to the PDF file
//                                         target="_blank"      // Opens the PDF in a new tab or window
//                                         rel="noopener noreferrer"
//                                         className="btn btn-primary "
//                                     >
//                                         Download PDF
//                                     </a>

//                                 )}
//                             </div>
//                             <div className="holiday-actions col-lg-1 mt-3">
//                                 <Link to={`/tourEdit/${tour.id}`}>
//                                     <button className="holiday-update-btn"><i className="fa-solid fa-pen-to-square"></i> Update</button>
//                                 </Link>
//                                 <button onClick={() => handleDelete(tour.id)} className="holiday-delete-btn">
//                                     <i className="fa-solid fa-bucket"></i> Delete
//                                 </button>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No tours available.</p> // Message when no tours are available
//                 )}
//             </div>
//         </Fragment>
//     );
// }


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
            await axios.delete(`${process.env.REACT_APP_ALL_CARS}/deleteTour/${id}`);
            dispatch(deleteTour({ id }));
        } catch (error) {
            console.error("Failed to delete the tour", error.message);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_ALL_CARS}/tour`);
                dispatch(getTour(response.data.tour));
            } catch (error) {
                console.log("Cannot fetch data", error.message);
            }
        };

        fetchData();
    }, [dispatch]);

    return (
        <Fragment>
            <Admin />
            <div className="tour-container">
                <div className="d-flex justify-content-between">
                <h2 className="tour-header">Manage Tour Package</h2>
                <div className="table-add">
                    <Link to='/tour/create'>
                        <button className="add-button"><i className="fa-solid fa-plus"></i> Add Tour</button>
                    </Link>
                </div>
                </div>
                
                <div className="tour-grid mt-5">
                    {tours.length > 0 ? (
                        tours.map((tour, index) => (
                            <div className="tour-card" key={tour.id}>
                                <div className="tour-image">
                                    <img src={`https://saranamayyappatravels-fp8c.vercel.app/${tour.imageUrl}`} alt="Holiday Image" />
                                </div>
                                <div className="tour-details">
                                    <h5>Sno: {index + 1}</h5>
                                    <p>Name: <strong>{tour.name}</strong></p>
                                    <h6>Services:</h6>
                                    <ol>
                                        {tour.services.map((ser, i) => (
                                            <li key={i}>{ser.name}</li>
                                        ))}
                                    </ol>
                                    <p>Category: <strong>{tour.category}</strong></p>
                                    <p>No Of Persons: <strong>{tour.numberOfPersons}</strong></p>
                                </div>
                                <div className="tour-pdf">
                                    {tour.pdf && (
                                        <a href={`https://saranamayyappatravels-fp8c.vercel.app/${tour.pdf}`} target="_blank" rel="noopener noreferrer" className=" download-btn">
                                            Download PDF
                                        </a>
                                    )}
                                </div>
                                <div className="tour-actions">
                                    <Link to={`/tourEdit/${tour.id}`}>
                                        <button className="action-button update-btn"><i className="fa-solid fa-pen-to-square"></i> Update</button>
                                    </Link>
                                    <button onClick={() => handleDelete(tour.id)} className="action-button delete-btn">
                                        <i className="fa-solid fa-bucket"></i> Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No tours available.</p>
                    )}
                </div>
            </div>
        </Fragment>
    );
}
