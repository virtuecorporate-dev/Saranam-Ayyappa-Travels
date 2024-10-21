import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: 'cabs',
  initialState: {
    Cabs: []
  },
  reducers: {
    getAllCar: (state, action) => {
      state.Cabs = action.payload.map(car => {
        return {
          id: car._id,
          cabModel: car.cabModel,
          brand: car.brand,
          seats: car.seats,
          onRide: car.onRide,  // Include onRide field
          imageUrl: car.imageUrl,
          description: car.description,
          category: car.category,
          localTripType: car.localTripType,  // Include localTripType
          pricePerday: car.pricePerday || {},
          pricePerKm: car.pricePerKm || {}  // Include pricePerKm if available
        };
      });
    },

    addCar: (state, action) => {
      state.Cabs.push(action.payload);
    },

    updateCar: (state, action) => {
      const index = state.Cabs.findIndex(x => x.id === action.payload.id);
      if (index !== -1) {
        state.Cabs[index] = {
          ...state.Cabs[index],
          cabModel: action.payload.cabModel,
          brand: action.payload.brand,
          seats: action.payload.seats,
          onRide: action.payload.onRide,  // Update onRide field
          description: action.payload.description,
          category: action.payload.category,
          localTripType: action.payload.localTripType || state.Cabs[index].localTripType,  // Update localTripType if provided
          imageUrl: action.payload.imageUrl,
          pricePerday: action.payload.pricePerday || state.Cabs[index].pricePerday,
          pricePerKm: action.payload.pricePerKm || state.Cabs[index].pricePerKm // Update pricePerKm if provided
        };
      }
    },

    deleteCar: (state, action) => {
      const id = action.payload.id;
      state.Cabs = state.Cabs.filter(car => car.id !== id);
    }
  }
});

export const { getAllCar, addCar, updateCar, deleteCar } = carSlice.actions;
export default carSlice.reducer;
