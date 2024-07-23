import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { addCar } from "../Slice/carsSlice";
import { useNavigate } from "react-router-dom";

export function CreateTable() {
  const [carModel, setCarModel] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [seats, setSeats] = useState('');
  const [availability, setAvailability] = useState(true);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = { carModel, brand, price, seats, availability, description, category };
      const response = await axios.post('http://localhost:8000/api/v1/createCar', formData);
      dispatch(addCar(response.data.newCar));
      navigate('/admin');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="carModel">Car Model:</label>
        <input
          type="text"
          id="carModel"
          name="carModel"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="seats">Seats:</label>
        <input
          type="number"
          id="seats"
          name="seats"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="availability">Availability:</label>
        <input
          type="checkbox"
          id="availability"
          name="availability"
          checked={availability}
          onChange={(e) => setAvailability(e.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="One-Way Rental">One-Way Rental</option>
          <option value="Round Trip">Round Trip</option>
          <option value="Hourly Rental">Hourly Rental</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
