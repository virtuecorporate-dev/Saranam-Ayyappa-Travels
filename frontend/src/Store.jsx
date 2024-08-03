import {configureStore} from '@reduxjs/toolkit'
import carReducer from './Slice/carsSlice'
import userReducer from './Slice/userSlice'


export const Store = configureStore({
    reducer:{
        Cars:carReducer,
        users:userReducer
    }
   
})