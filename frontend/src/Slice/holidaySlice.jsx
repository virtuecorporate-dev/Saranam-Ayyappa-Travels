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
                imageUrl:holiday.imageUrl,
                services:holiday.services.map(service=>({
                    id:service?._id,
                    name:service?.name
                })),
                category:holiday.category
            }
        })
    },
    addHoliday:(state,action)=>{
        state.holidays.push(action.payload);
    }

  }  
})

export const{getHoliday, addHoliday}=holidaySlice.actions;
export default holidaySlice.reducer;