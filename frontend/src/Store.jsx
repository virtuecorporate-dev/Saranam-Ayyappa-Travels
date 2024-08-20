import {configureStore} from '@reduxjs/toolkit'
import carReducer from './Slice/carsSlice'
import userReducer from './Slice/userSlice'
import holidayReducer from './Slice/holidaySlice'


export const Store = configureStore({
    reducer:{
        Cars:carReducer,
        users:userReducer,
        holidays:holidayReducer
    }
   
})