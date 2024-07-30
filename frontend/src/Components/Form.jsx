import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Datepicker from 'react-datepicker'
// import {TimePickerComponent} from '@syncfusion/ej2-react-calendars'
import 'react-datepicker/dist/react-datepicker.css';


const BookingForm = () => {

    const InitialState = {
        triptype: "",
        from: "",
        to: "",
        PickUpdate: new Date(),
        pickUpTime: '',
        pickUpLocation: "",
        returndate: new Date(),
        ReturnTime: "",
        returnLocation: "",
        package: "",
        visitingPlaces: [""],
        NumberOfPersons: "",
        CabType: "",
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
            case "PICK-UP-DATE":
                return { ...state, PickUpdate: action.payload };
            case "RETURN-DATE":
                return { ...state, returndate: action.payload };
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
            case "RETURN-LOCATION":
                return { ...state, returnLocation: action.payload };
            case "RETURN-TIME":
                return { ...state, ReturnTime: action.payload };
            case "ADD-VISITING-PLACE":
                return { ...state, visitingPlaces: [...state.visitingPlaces, ""] };
            case "REMOVE-VISITING-PLACE":
                return { ...state, visitingPlaces: state.visitingPlaces.filter((_, index) => index !== action.payload) };
            case "UPDATE-VISITING-PLACE":
                const updatedVisitingPlaces = state.visitingPlaces.map((place, index) =>
                    index === action.payload.index ? action.payload.value : place
                );
                return { ...state, visitingPlaces: updatedVisitingPlaces };
            case "NUMBER-OF-PERSONS":
                console.log(action.payload);
                return { ...state, NumberOfPersons: action.payload };
            case "CAB-TYPE":
                console.log(action.payload);
                return { ...state, CabType: action.payload };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, InitialState);
    const [error, setError] = useState("")

    const navigate = useNavigate()
    const FormSubmit = (e) => {
        e.preventDefault();

        if (!state.triptype) {
            setError("Please Select The TripType")
            return
        }
        setError("")


        navigate("/cars", { state: { ...state, PickUpdate: state.PickUpdate.toLocaleDateString(), returndatedate: state.returndate.toLocaleDateString() } })

    };

    return (
        <div className="container form-section">
            <div className="row search-call">
                <div className=" col-md-4 form-left " style={{ backgroundColor: "#005395" }} >
                    <h3>Call Now !</h3>
                    <div className="row">
                        <div className="col-2 phone-icons mt-4">
                            <i className="fa-solid fa-phone" style={{ fontSize: "40px", padding: "8px", color: "white", textAlign: "start" }}></i>
                        </div>
                        <div className=" col-10 callDetails">
                            <h6>Call for detail information</h6>
                            <h2>1234 1234 983</h2>
                        </div>
                    </div>
                </div>
                <div className=" col-md-8 form-right" style={{ backgroundColor: "white" }}>
                    <form className='container-fluid booking-form' onSubmit={FormSubmit}>
                        <div className='row triptype'>
                            <div className='col-4 from-input'>
                                <input
                                    type="radio"
                                    id='Drop-Trip'
                                    name='trip-type'
                                    value="Drop Trip"

                                    onChange={(e) => { dispatch({ type: "TRIP-TYPE", payload: e.target.value }) }}
                                />
                                <label htmlFor="Drop-Trip">Drop Trip</label>
                            </div>
                            <div className='col-4 from-input'>
                                <input
                                    type="radio"
                                    id='Local-Trip'
                                    name='trip-type'
                                    value="Local Trip"
                                    onChange={(e) => { dispatch({ type: "TRIP-TYPE", payload: e.target.value }) }}
                                />
                                <label htmlFor="Local-Trip">Local Trip</label>
                            </div>
                            <div className='col-4 from-input'>
                                <input
                                    type="radio"
                                    id='Outstation'
                                    name='trip-type'
                                    value="Outstation"
                                    onChange={(e) => { dispatch({ type: "TRIP-TYPE", payload: e.target.value }) }}
                                />
                                <label htmlFor="Outstation">Outstation</label>
                            </div>
                        </div>

                        {error && (
                            <div className='row mt-2'>
                                <div className='col-12'>
                                    <p style={{ color: 'red', fontSize: "12px" }} >{error}</p>
                                </div>
                            </div>
                        )}

                        <div className='row mt-0'>
                            <div className='col-6'>
                                <label htmlFor="From">From</label>
                                <input type="text" className='input-field'
                                    id='From'
                                    value={state.from}
                                    placeholder="Coimbatore, Tamil Nadu, India"
                                    required
                                    onChange={(e) => { dispatch({ type: "FROM", payload: e.target.value }) }} />
                            </div>

                            <div className='col-6'>
                                <label htmlFor="To">To</label>
                                <input type="text" className='input-field'
                                    id='To'
                                    value={state.to}
                                    placeholder="Salem, Tamil Nadu, India"
                                    required
                                    onChange={(e) => { dispatch({ type: "TO", payload: e.target.value }) }} />
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
                            <div className='col-4'>
                                <label htmlFor="PickUpLoaction">Pick Up Loaction</label>
                                <input type="text" className='input-field'
                                    id='PickUpLoaction'
                                    value={state.pickUpLocation}
                                    placeholder="Gandhipuram,Cbe"
                                    required
                                    onChange={(e) => { dispatch({ type: "PICK-UP-LOCATION", payload: e.target.value }) }} />
                            </div>

                            <div className='col-4'>
                                <label htmlFor="Date">Pick Up Date</label> <br />
                                <Datepicker className='input-field'
                                    selected={state.PickUpdate}
                                    required
                                    onChange={(date) => { dispatch({ type: "PICK-UP-DATE", payload: date }) }} />
                            </div>

                            <div className='col-4'>
                                <label htmlFor="PickUpTime">Pick Up Time</label> <br />
                                <input type="text" className='input-field'
                                    id='PickUpTime'
                                    value={state.pickUpTime}
                                    placeholder="10.00 am"
                                    onChange={(e) => dispatch({ type: "PICK-UP-TIME", payload: e.target.value })} />
                            </div>

                        </div>

                        {state.triptype === "Outstation" && (
                            <>
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
                                                    <button className='visiting-pl-add' type='button' onClick={() => dispatch({ type: "ADD-VISITING-PLACE" })}>+</button>
                                                    <button className='visiting-pl-delete' type='button' onClick={() => dispatch({ type: "REMOVE-VISITING-PLACE", payload: index })}>x</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='row mt-3'>
                                    <div className='col-6'>
                                        <label htmlFor="NumberOfPersons">Number Of Persons</label>
                                        <input type="text" className='input-field'
                                            id='NumberOfPersons'
                                            value={state.NumberOfPersons}
                                            placeholder="4"
                                            required
                                            onChange={(e) => { dispatch({ type: "NUMBER-OF-PERSONS", payload: e.target.value }) }} />
                                    </div>
                                    <div className='col-6'>
                                        <label htmlFor="CabType">Cab Type</label> <br />
                                        <select
                                            id='CabType'
                                            className='input-field'
                                            value={state.CabType}
                                            required
                                            onChange={(e) => { dispatch({ type: "CAB-TYPE", payload: e.target.value }) }}
                                        >
                                            <option>3 Seater</option>
                                            <option>4 Seater</option>
                                            <option>5 Seater</option>
                                            <option>6 Seater</option>
                                        </select>
                                       
                                    </div>


                                </div>
                            </>


                        )}

                        {(state.triptype === "Local Trip" || state.triptype === "Outstation") && (
                            <div className='row mt-3'>
                                <div className='col-4'>
                                    <label htmlFor="returnLocation">Return Location </label>
                                    <input type="text" className='input-field'
                                        id='DropLoaction'
                                        value={state.ReturnLocation}
                                        placeholder="Aathur,Salem"
                                        required
                                        onChange={(e) => { dispatch({ type: "RETURN-LOCATION", payload: e.target.value }) }} />
                                </div>

                                <div className='col-4'>
                                    <label htmlFor="Date">Return Date</label> <br />
                                    <Datepicker className='input-field'
                                        selected={state.returndate}
                                        required
                                        onChange={(date) => { dispatch({ type: "RETURN-DATE", payload: date }) }} />
                                </div>

                                <div className='col-4'>
                                    <label htmlFor="ReturnTime">Return Time</label>
                                    <input type="text" className='input-field'
                                        id='ReturnTime'
                                        value={state.ReturnTime}
                                        placeholder='2.00 pm'
                                        required
                                        onChange={(e) => dispatch({ type: "RETURN-TIME", payload: e.target.value })} />
                                </div>
                            </div>
                        )}

                        <div className='row mt-4'>
                            <div className="col-12 search-cab">
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
