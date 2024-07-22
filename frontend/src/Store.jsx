import {configureStore} from '@reduxjs/toolkit'
import carReducer from './Slice/carsSlice'


export const Store = configureStore({
    reducer:{
        Cars:carReducer
    }
})