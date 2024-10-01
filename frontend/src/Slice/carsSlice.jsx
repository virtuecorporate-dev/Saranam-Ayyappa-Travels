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
      addCar: (state, action) => {
        state.Cars.push(action.payload);
      },
      updateCar:(state,action)=>{
          const index = state.Cars.findIndex(x=>x.id === action.payload.id);
          state.Cars[index]={
            carModel:action.payload.carModel, 
            brand:action.payload.brand, 
            price:action.payload.price, 
            seats:action.payload.seats, 
            availability:action.payload.availability, 
            description:action.payload.description, 
            category:action.payload.category
          }
      },
      deleteCar :(state,action)=>{
        const id = action.payload.id;
        state.Cars=state.Cars.filter(u => u.id !== id)
      },
  
    }
  });
  
  export const { getAllCar,addCar,updateCar, deleteCar} = carSlice.actions;
  export default carSlice.reducer;
  