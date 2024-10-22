import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { addCar } from "../Slice/carsSlice";
import { useNavigate, Link } from "react-router-dom";


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
  const [localType, setLocalType] = useState('')
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
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

      const response = await axios.post('${process.env.REACT_APP_ALL_CARS}/createCar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      dispatch(addCar(response.data.newCar));
      navigate('/table');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="container create ">
      <form onSubmit={handleSubmit} className="create-table">
        <h1 className="create-head mb-5">Adding Your Cab Details</h1>
        
        <div className="form-group">
          <label htmlFor="carModel">Car Model:</label>
          <input 
            type="text"
            id="carModel"
            name="carModel"
            value={carModel}
            required
            onChange={(e) => setCarModel(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={brand}
            required
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            required
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="seats">Seats:</label>
          <input
            type="number"
            id="seats"
            name="seats"
            value={seats}
            required
            onChange={(e) => setSeats(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="availability">Availability:</label>

          <input
            type="checkbox"
            id="availability"
            name="availability"
            checked={availability}
            required
            onChange={(e) => setAvailability(e.target.checked)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea 
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="imageUrl">Upload Image:</label>
          <input
            type="file"
            id="imageUrl"
            name="imageUrl"
            onChange={handleFileChange}
            required
          />
        </div>
        
        {imagePreviewUrl && (
          <div>
            <img src={imagePreviewUrl} alt="Image Preview" style={{ width: '200px', height: 'auto' }} />
          </div>
        )}
        
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="Outstation">Outstation</option>
            <option value="Local Trip">Local Trip</option>
            <option value="Drop Trip">Drop Trip</option>
          </select>
        </div>
        
        <button className="create-submit mb-3" type="submit">Create</button>
        <br />
        <Link to="/table">
                    <button className="create-cancel" type="button">Cancel</button>
                </Link>
      </form>
    </div>
  );
}
