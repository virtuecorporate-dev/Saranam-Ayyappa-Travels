import React, { useReducer } from 'react';
import {useNavigate} from 'react-router-dom'

const BookingForm = () => {

    const InitialState = {
        triptype: "One Way Trip",
        from: "",
        to: "",
        date: new Date(),
        pickUpTime: '10.00 am',
        pickUpLocation: "",
        dropTime: "2.00 pm",
        dropLocation: "",
        package: "",
        visitingPlaces: [""],  
        name: "",
        mobile: "",
        mail: "",
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "TRIP-TYPE":
                return { ...state, triptype: action.payload };
            case "FROM":
                return { ...state, from: action.payload };
            case "TO":
                return { ...state, to: action.payload };
            case "DATE":
                return { ...state, date: action.payload };
            case "NAME":
                return { ...state, name: action.payload };
            case "MOBILE":
                return { ...state, mobile: action.payload };
            case "MAIL":
                return { ...state, mail: action.payload };
            case "PICK-UP-LOCATION":
                return { ...state, pickUpLocation: action.payload };
            case "PICK-UP-TIME":
                return { ...state, pickUpTime: action.payload };
            case "DROP-LOCATION":
                return { ...state, dropLocation: action.payload };
            case "DROP-TIME":
                return { ...state, dropTime: action.payload };
            case "ADD-VISITING-PLACE":
                return { ...state, visitingPlaces: [...state.visitingPlaces, ""] };
            case "REMOVE-VISITING-PLACE":
                return { ...state, visitingPlaces: state.visitingPlaces.filter((_, index) => index !== action.payload) };
            case "UPDATE-VISITING-PLACE":
                const updatedVisitingPlaces = state.visitingPlaces.map((place, index) =>
                    index === action.payload.index ? action.payload.value : place
                );
                return { ...state, visitingPlaces: updatedVisitingPlaces };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, InitialState);

    const navigate= useNavigate()
    const FormSubmit = (e) => {
        e.preventDefault();
        navigate("/cars", {state:state})
       
    };

    return (
        <div className="container">
            <div className="row search-call">
                <div className="col-lg-4 form-left" style={{ backgroundColor: "#2E236C" }} >
                    <h3>Call Now !</h3>
                    <div className="row">
                        <div className="col-lg-2 phone-icons mt-2">
                            <i className="fa-solid fa-phone" style={{ fontSize: "30px", background: "red", padding: "8px", color: "white" }}></i>
                        </div>
                        <div className="col-lg-10">
                            <h6 className='text-secondary'>Call for detail information</h6>
                            <h3>1234 1234 98</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 form-right" style={{ backgroundColor: "white" }}>
                    <form className='container-fluid booking-form' onSubmit={FormSubmit}>
                        <div className='row triptype'>
                            <div className='col-4 from-input'>
                                <input
                                    type="radio"
                                    id='One-Way-Trip'
                                    name='trip-type'
                                    value="One Way Trip"
                                    onChange={(e) => { dispatch({ type: "TRIP-TYPE", payload: e.target.value }) }}
                                />
                                <label htmlFor="One-Way-Trip">One Way Trip</label>
                            </div>
                            <div className='col-4 from-input'>
                                <input
                                    type="radio"
                                    id='Round-Trip'
                                    name='trip-type'
                                    value="Round Trip"
                                    onChange={(e) => { dispatch({ type: "TRIP-TYPE", payload: e.target.value }) }}
                                />
                                <label htmlFor="Round-Trip">Round Trip</label>
                            </div>
                            <div className='col-4 from-input'>
                                <input
                                    type="radio"
                                    id='Hourly-Trip'
                                    name='trip-type'
                                    value="Hourly Trip"
                                    onChange={(e) => { dispatch({ type: "TRIP-TYPE", payload: e.target.value }) }}
                                />
                                <label htmlFor="Hourly-Trip">Hourly Trip</label>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-4'>
                                <label htmlFor="From">From</label>
                                <input type="text" className='input-field'
                                    id='From'
                                    value={state.from}
                                    placeholder="Coimbatore, Tamil Nadu, India"
                                    onChange={(e) => { dispatch({ type: "FROM", payload: e.target.value }) }} />
                            </div>

                            <div className='col-4'>
                                <label htmlFor="To">To</label>
                                <input type="text" className='input-field'
                                    id='To'
                                    value={state.to}
                                    placeholder="Salem, Tamil Nadu, India"
                                    onChange={(e) => { dispatch({ type: "TO", payload: e.target.value }) }} />
                            </div>

                            <div className='col-4'>
                                <label htmlFor="Date">Date</label>
                                <input type="text" className='input-field'
                                    id='Date'
                                    placeholder={state.date}
                                    onChange={(e) => { dispatch({ type: "DATE", payload: e.target.value }) }} />
                            </div>
                        </div>

                        {/* <div className='row mt-3'>
                            <div className='col-4'>
                                <label htmlFor="name">Name</label>
                                <input type="text" className='input-field'
                                    id='name'
                                    value={state.name}
                                    onChange={(e) => { dispatch({ type: "NAME", payload: e.target.value }) }} />
                            </div>
                            <div className='col-4'>
                                <label htmlFor="mobile">Mobile No</label>
                                <input type="text" className='input-field'
                                    id='mobile'
                                    placeholder={state.mobile}
                                    onChange={(e) => dispatch({ type: "MOBILE", payload: e.target.value })} />
                            </div>
                            <div className='col-4'>
                                <label htmlFor="mail">Mail Id</label>
                                <input type="text" className='input-field'
                                    id='mail'
                                    placeholder={state.mail}
                                    onChange={(e) => dispatch({ type: "MAIL", payload: e.target.value })} />
                            </div>
                        </div> */}

                        <div className='row mt-3'>
                            <div className='col-6'>
                                <label htmlFor="PickUpLoaction">Pick Up Loaction</label>
                                <input type="text" className='input-field'
                                    id='PickUpLoaction'
                                    value={state.pickUpLocation}
                                    placeholder="Gandhipuram,Cbe"
                                    onChange={(e) => { dispatch({ type: "PICK-UP-LOCATION", payload: e.target.value }) }} />
                            </div>
                            <div className='col-6'>
                                <label htmlFor="PickUpTime">Pick Up Time</label>
                                <input type="text" className='input-field'
                                    id='PickUpTime'
                                    placeholder={state.pickUpTime}
                                    onChange={(e) => dispatch({ type: "PICK-UP-TIME", payload: e.target.value })} />
                            </div>
                        </div>

                        {state.triptype === "Hourly Trip" && (
                            <div className='row mt-3'>
                                <div className="col-12">
                                    <label htmlFor="Visiting Places">Visiting Places</label>
                                    {state.visitingPlaces.map((place, index) => (
                                        <div className='row mb-2' key={index}>
                                            <div className="col-8">
                                                <input
                                                    type="text"
                                                    className='input-field'
                                                    value={place}
                                                    onChange={(e) => dispatch({ type: "UPDATE-VISITING-PLACE", payload: { index, value: e.target.value } })}
                                                />
                                            </div>
                                            <div className='col-4'>
                                                <button type='button' onClick={() => dispatch({ type: "ADD-VISITING-PLACE" })}>+</button>
                                                <button type='button' onClick={() => dispatch({ type: "REMOVE-VISITING-PLACE", payload: index })}>x</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {(state.triptype === "Round Trip" || state.triptype === "Hourly Trip") && (
                            <div className='row mt-3'>
                                <div className='col-6'>
                                    <label htmlFor="DropLocation">Drop Location </label>
                                    <input type="text" className='input-field'
                                        id='DropLoaction'
                                        value={state.dropLocation}
                                        placeholder="Aathur,Salem"
                                        onChange={(e) => { dispatch({ type: "DROP-LOCATION", payload: e.target.value }) }} />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="DropTime">Drop Time</label>
                                    <input type="text" className='input-field'
                                        id='DropTime'
                                        placeholder={state.dropTime}
                                        onChange={(e) => dispatch({ type: "DROP-TIME", payload: e.target.value })} />
                                </div>
                            </div>
                        )}

                        <div className='row mt-4'>
                            <div className="col-12">
                                <button type='submit'>Search Cabs</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookingForm;
