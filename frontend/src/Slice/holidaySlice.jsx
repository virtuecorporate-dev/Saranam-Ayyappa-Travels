import { createSlice } from "@reduxjs/toolkit";

const holidaySlice=createSlice({
    name:"holidays",
    initialState:{
        holidays:[]
    },
  reducers:{
    getHoliday:(state,action)=>{
        state.holidays=action.payload.map(holiday=>{
            return{
                id:holiday._id,
                name:holiday.name,
                imageUrl:holiday.imageUrl || "",
                services:holiday.services.map(service=>({
                    id:service?._id,
                    name:service?.name
                })),
                category:holiday.category
            }
        })
    },
   
    addHoliday:(state, action) => {
        state.holidays.push({
            id: action.payload._id || null,
            name: action.payload.name,
            imageUrl: action.payload.imageUrl || "",
            services: action.payload.services ? action.payload.services.map(service => ({
                id: service?._id || null,
                name: service?.name
            })) : [],
            category: action.payload.category || ""
        });
    },
    updateHoliday : (state,action)=>{
        const index = state.holidays.findIndex(x => x.id === action.payload.id);
         state.holidays[index]={
            ...state.holidays[index],
            name:action.payload.name,
            category:action.payload.category,
            services:action.payload.services,
            pdf:action.payload.pdf,
            imageUrl:action.payload.imageUrl
        }
    },
    deleteHoliday :(state,action)=>{
        const id = action.payload.id;
        state.holidays=state.holidays.filter(u => u.id !== id)
      },
    

  }  
})

export const{getHoliday, addHoliday,updateHoliday, deleteHoliday}=holidaySlice.actions;
export default holidaySlice.reducer;