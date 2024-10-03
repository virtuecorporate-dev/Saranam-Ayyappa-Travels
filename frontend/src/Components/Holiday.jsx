import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteHoliday, getHoliday } from "../Slice/holidaySlice";
import axios from "axios";
import { Link } from "react-router-dom";
import Admin from "../Pages/Admin";

export default function Holiday() {
    const dispatch = useDispatch();
    const holidays = useSelector(state => state.holidays.holidays );

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/v1/deleteHoliday/${id}`);
            dispatch(deleteHoliday({ id })); // Dispatch the action after the response
        } catch (error) {
            console.error("Error deleting holiday:", error);
        }
    };
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/holiday');
                dispatch(getHoliday(response.data.holidays));
            } catch (error) {
                console.log("error", error.message);
            }
        };
        fetchData();
    }, [dispatch]);
    return (
        <Fragment>
            <Admin/>
            <div className="container mb-3">
                <h2>Create Holiday Page</h2>
                <div className="table-add mt-4">
                    <Link to='/holiday/create'>
                        <button><i className="fa-solid fa-plus mb-2"></i> <h5>Add</h5></button>
                    </Link>
                </div>
                {holidays.map((holiday, index) => (
                    <div className="row car-detail" key={index}>
                        <div className="col-lg-2">
                            <img
                                src={`http://localhost:8000/${holiday.imageUrl}`}
                                alt="Holiday Image"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-lg-8">
                            <div className="row car-details">
                                <div className="col-lg-3">
                                    <label htmlFor={`index:${index}`}><h6>Sno</h6> {index + 1}</label>
                                </div>
                                <div className="col-lg-3">
                                    <label htmlFor="name"><h6>Name</h6>{holiday.name}</label>
                                </div>
                                <div className="col-lg-3">
                                    <h6>Services</h6>    
                                    <ul>
                                        {holiday.services.map((ser, i) => (
                                            <li key={i}>{ser.name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-lg-3">
                                    <label htmlFor="category"><h6>Category</h6>
                             
                                        <ul>
                                            <li>{holiday.category}</li>
                                        </ul>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 holiday-pdf">
                        <label htmlFor="pdf"> <h6>pdf</h6>
                                                                        </label>


                            {holiday.pdf && (
                                <a 
                                    href={`http://localhost:8000/${holiday.pdf}`}  // URL to the PDF file
                                    target="_blank"      // Opens the PDF in a new tab or window
                                    rel="noopener noreferrer"
                                    className="btn btn-primary "
                                >
                                    Download PDF
                                </a>

                            )}
                        </div>
                        <div className="holiday-actions col-lg-1 mt-3">
                    <Link to={`/holidayEdit/${holiday.id}`}>
                        <button className="holiday-update-btn"><i className="fa-solid fa-pen-to-square"></i> Update</button>
                    </Link>
                    <button onClick={() => handleDelete(holiday.id)} className="holiday-delete-btn">
                        <i className="fa-solid fa-bucket"></i> Delete
                    </button>
                </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
}
