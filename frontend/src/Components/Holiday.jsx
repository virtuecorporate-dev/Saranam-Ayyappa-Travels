import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHoliday } from "../Slice/holidaySlice";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Holiday() {
    const dispatch = useDispatch();
    const holidays = useSelector(state => state.holidays.holidays );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/holiday');
                dispatch(getHoliday(response.data.holidays));
                console.log(response);
            } catch (error) {
                console.log("error", error.message);
            }
        };
        fetchData();
    }, [dispatch]); // Adding dispatch to dependency array

    return (
        <Fragment>
            <div className="container mb-3">
                <h2>Create Holiday Page</h2>
                <div className="table-add mt-4">

<Link to='/holiday/create'>

    <button><i class="fa-solid fa-plus mb-2"></i> Add</button>
</Link>
</div>
                {holidays.map((holiday, index) => (
                    <div className="row car-detail" key={index}>
                        <div className="col-lg-2">
                            <img
                                src={holiday.imageUrl}
                                alt="Holiday Image"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-lg-9">
                            <div className="row car-details">
                                <div className="col-lg-3">
                                    <label htmlFor={`index:${index}`}>Sno {index + 1}</label>
                                </div>
                                <div className="col-lg-3">
                                    <label htmlFor="name">Name : {holiday.name}</label>
                                </div>
                                <div className="col-lg-3">
                                <h5>Services</h5>    

                                    {
                                    
                                        holiday.services.map( (ser,i)=>(
                                            <ul>
                                            <li key={i}> {ser.name}</li>

                                            </ul>
                

                                        ))
                                    }
                                </div>
                                <div className="col-lg-3">
                                    <label htmlFor="category">Category :
                                        <ul>
                                            <li> {holiday.category}</li>
                                        </ul>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 mt-3">
                            <Link to={`/holidayEdit/${holiday.id}`}>
                            <button className="update"><i class="fa-solid fa-pen-to-square "></i>Update</button></Link>
                            <button className="delete"><i class="fa-solid fa-bucket "></i>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
}
