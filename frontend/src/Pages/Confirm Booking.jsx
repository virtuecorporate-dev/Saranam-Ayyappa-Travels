import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const ConfirmBooking = () => {

    const { state } = useLocation()

    const [form, setForm] = useState({
        name: "",
        mobile: "",
        mail: ""
    })

    const handleName = (e) => {
        const { value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            name: value
        }));
    }
    const handleMobile = (e) => {
        const { value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            mobile: value
        }));
    }
    const handleMail = (e) => {
        const { value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            mail: value
        }));
    }

    const BookNow = (e) => { 
        e.preventDefault();
        const bookingDetails = {
            ...state,
            ...form,
            selectedCab: state.selectedCab
    }

    fetch('http://localhost:8000/api/v1/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ bookingDetails })
      })
        .then(response => response.json())
        .then(data => {
            alert("mail send")
          console.log('Success:', data);
          // You can add additional logic here, like showing a success message or redirecting the user.
        })
        .catch((error) => {
          console.error( error);
        });
    }



    return (

        <section className='confirmBooking-sec container'>
            <h2>Confirm Your Cab</h2>
            <div className='row'>

                <div className='col-12'>
                    <div className='form-details' style={{ backgroundColor: "#a4a4e7", color: "white" }}>

                        <div className='d-flex justify-content-around location' >
                            <h4>{state.from} => {state.to}</h4>
                            <h4>Date-{state.date} </h4> <h4>Time-{state.pickUpTime}</h4>
                        </div>


                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-12'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-8'>
                                <div className='selected-cab'>
                                    <h4>{state.selectedCab.brand}</h4>
                                    <p>{state.selectedCab.carModel}</p>
                                    <img src={state.selectedCab.imageUrl} alt={state.selectedCab.brand} style={{ width: "250px" }} />
                                </div>
                                <div className='address-details'>
                                    <p>Pick Up Location- {state.pickUpLocation}</p>
                                    <p>Pick Up Time- {state.pickUpTime}</p>
                                    {state.triptype === "Hourly Trip" &&
                                        <p>Visiting Place- {state.visitingPlaces.join(', ')}</p>
                                    }
                                    {(state.triptype === "Round Trip" || state.triptype === "Hourly Trip") &&
                                        <div>
                                            <p>Drop Location- {state.dropLocation}</p>
                                            <p>Drop Time- {state.dropTime}</p>
                                        </div>

                                    }
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='price-details'>
                                    <h4>Total Price - ₹{state.selectedCab.price}</h4>
                                </div>
                                <div className='traveller-details mt-4'>
                                    <h6>Fill Your Details </h6>
                                    <form action="post" onSubmit={BookNow}>
                                        <div className='field'>
                                            <label htmlFor="name">Name</label>
                                            <input type="text"
                                                id='name'
                                                value={form.name}
                                                onChange={handleName}
                                                required />
                                        </div>
                                        <div className='field'>
                                            <label htmlFor="mobile">Mobile</label>
                                            <input type="text"
                                                id='mobile'
                                                value={form.mobile}
                                                onChange={handleMobile}
                                                required />
                                        </div>
                                        <div className='field'>
                                            <label htmlFor="mail">Mail Id</label>
                                            <input type="text"
                                                id='mail'
                                                value={form.mail}
                                                onChange={handleMail}
                                                required />
                                        </div>
                                        <div>
                                            <button type='submit'>Book Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default ConfirmBooking