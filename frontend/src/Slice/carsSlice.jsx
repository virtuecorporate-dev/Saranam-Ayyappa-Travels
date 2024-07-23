import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: 'cars',
    initialState: {
      Cars: []
    },
    reducers: {
      getAllCar: (state, action) => {
        state.Cars = action.payload.map(car => {
          return {
            id: car._id, 
            carModel: car.carModel, 
            brand: car.brand, 
            price: car.price, 
            seats: car.seats, 
            availability: car.availability,
            imageUrl: car.imageUrl,
            description: car.description,
            category: car.category
          };
        });
      },
      addCar:(state,action)=>{
        state.Cars.push(action.payload);
      }
    }
  });
  
  export const { getAllCar,addCar } = carSlice.actions;
  export default carSlice.reducer;
  