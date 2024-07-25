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
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setImagePreviewUrl(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('carModel', carModel);
      formData.append('brand', brand);
      formData.append('price', price);
      formData.append('seats', seats);
      formData.append('availability', availability);
      formData.append('description', description);
      formData.append('category', category);
      if (file) {
        formData.append('imageUrl', file);
      }

      const response = await axios.post('http://localhost:8000/api/v1/createCar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
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
        <label htmlFor="imageUrl">Upload Image:</label>
        <input
          type="file"
          id="imageUrl"
          name="imageUrl"
          onChange={handleFileChange}
        />
      </div>
      {imagePreviewUrl && (
        <div>
          <img src={imagePreviewUrl} alt="Image Preview" style={{ width: '200px', height: 'auto' }} />
        </div>
      )}
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="One Way Trip">One Way Trip</option>
          <option value="Round Trip">Round Trip</option>
          <option value="Hourly Trip">Hourly Trip</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
