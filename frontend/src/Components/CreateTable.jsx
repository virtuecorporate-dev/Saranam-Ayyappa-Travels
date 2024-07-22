import { Fragment, useState } from "react";

export function CreateTable(){
    const [formData, setFormData] = useState({
        carModel: '',
        brand: '',
        price: '',
        seats: '',
        availability: true,
        imageUrl: '',
        description: '',
        category: 'One-Way Rental',
      });
    
      // Handle change for all input fields
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="carModel">Car Model:</label>
            <input
              type="text"
              id="carModel"
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="brand">Brand:</label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="seats">Seats:</label>
            <input
              type="number"
              id="seats"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="availability">Availability:</label>
            <input
              type="checkbox"
              id="availability"
              name="availability"
              checked={formData.availability}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="imageUrl">Image URL:</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="One-Way Rental">One-Way Rental</option>
              <option value="Round Trip">Round Trip</option>
              <option value="Hourly Rental">Hourly Rental</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>   )
}