import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteHoliday, getHoliday } from "../Slice/holidaySlice";
import axios from "axios";
import { Link } from "react-router-dom";
import Admin from "../Pages/Admin";

export default function Holiday() {
    const dispatch = useDispatch();
    const holidays = useSelector(state => state.holidays.holidays);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${process.env.REACT_APP_ALL_CARS}/deleteHoliday/${id}`);
            dispatch(deleteHoliday({ id })); // Dispatch the action after the response
        } catch (error) {
            console.error("Error deleting holiday:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('${process.env.REACT_APP_ALL_CARS}/holiday');
                dispatch(getHoliday(response.data.holidays));
            } catch (error) {
                console.log("error", error.message);
            }
        };
        fetchData();
    }, [dispatch]);
    return (
        // <Fragment>
        //     <Admin/>
        //     <div className="container mb-3">
        //         <h2>Create Holiday Page</h2>
        //         <div className="table-add mt-4">
        //             <Link to='/holiday/create'>
        //                 <button><i className="fa-solid fa-plus mb-2"></i> <h5>Add</h5></button>
        //             </Link>
        //         </div>
        //         {holidays.map((holiday, index) => (
        //             <div className="row car-detail" key={index}>
        //                 <div className="col-lg-2">
        //                     <img
        //                         src={`https://saranamayyappatravels-fp8c.vercel.app/${holiday.imageUrl}`}
        //                         alt="Holiday Image"
        //                         className="img-fluid"
        //                     />
        //                 </div>
        //                 <div className="col-lg-8">
        //                     <div className="row car-details">
        //                         <div className="col-lg-3">
        //                             <label htmlFor={`index:${index}`}><h6>Sno</h6> {index + 1}</label>
        //                         </div>
        //                         <div className="col-lg-3">
        //                             <label htmlFor="name"><h6>Name</h6>{holiday.name}</label>
        //                         </div>
        //                         <div className="col-lg-3">
        //                             <h6>Services</h6>    
        //                             <ul>
        //                                 {holiday.services.map((ser, i) => (
        //                                     <li key={i}>{ser.name}</li>
        //                                 ))}
        //                             </ul>
        //                         </div>
        //                         <div className="col-lg-3">
        //                             <label htmlFor="category"><h6>Category</h6>

        //                                 <ul>
        //                                     <li>{holiday.category}</li>
        //                                 </ul>
        //                             </label>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-lg-1 holiday-pdf">
        //                 <label htmlFor="pdf"> <h6>pdf</h6>
        //                                                                 </label>


        //                     {holiday.pdf && (
        //                         <a 
        //                             href={`https://saranamayyappatravels-fp8c.vercel.app/${holiday.pdf}`}  // URL to the PDF file
        //                             target="_blank"      // Opens the PDF in a new tab or window
        //                             rel="noopener noreferrer"
        //                             className="btn btn-primary "
        //                         >
        //                             Download PDF
        //                         </a>

        //                     )}
        //                 </div>
        //                 <div className="holiday-actions col-lg-1 mt-3">
        //             <Link to={`/holidayEdit/${holiday.id}`}>
        //                 <button className="holiday-update-btn"><i className="fa-solid fa-pen-to-square"></i> Update</button>
        //             </Link>
        //             <button onClick={() => handleDelete(holiday.id)} className="holiday-delete-btn">
        //                 <i className="fa-solid fa-bucket"></i> Delete
        //             </button>
        //         </div>
        //             </div>
        //         ))}
        //     </div>
        // </Fragment>

        <Fragment>
            <Admin />
            <div className="tour-container">
                <div className="d-flex justify-content-between">
                    <h2 className="tour-header">Manage Holiday Package</h2>
                    <div className="table-add">
                        <Link to='/holiday/create'>
                            <button className="add-button"><i className="fa-solid fa-plus"></i> Add Holiday</button>
                        </Link>
                    </div>
                </div>

                <div className="tour-grid mt-5">
                    {holidays.length > 0 ? (
                        holidays.map((holiday, index) => (
                            <div className="tour-card" key={holiday.id}>
                                <div className="tour-image">
                                    <img src={`https://saranamayyappatravels-fp8c.vercel.app/${holiday.imageUrl}`} alt="Holiday Image" />
                                </div>
                                <div className="tour-details">
                                    <h5>Sno: {index + 1}</h5>
                                    <p>Name: <strong>{holiday.name}</strong></p>
                                    <h6>Services:</h6>
                                    <ol>
                                        {holiday.services.map((ser, i) => (
                                            <li key={i}>{ser.name}</li>
                                        ))}
                                    </ol>
                                    <h6>Category:</h6>
                                    <ol>
                                        {holiday.category && holiday.category.map((cat, i) => (
                                            <li key={i}>{cat.name}</li>
                                        ))}
                                    </ol>

                                </div>
                                <div className="tour-pdf">
                                    {holiday.pdf && (
                                        <a href={`https://saranamayyappatravels-fp8c.vercel.app/${holiday.pdf}`} target="_blank" rel="noopener noreferrer" className="download-btn">
                                            Download PDF
                                        </a>
                                    )}
                                </div>
                                <div className="tour-actions">
                                    <Link to={`/holidayEdit/${holiday.id}`}>
                                        <button className="action-button update-btn"><i className="fa-solid fa-pen-to-square"></i> Update</button>
                                    </Link>
                                    <button onClick={() => handleDelete(holiday.id)} className="action-button delete-btn">
                                        <i className="fa-solid fa-bucket"></i> Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No holidays available.</p>
                    )}
                </div>
            </div>
        </Fragment>

    );
}
