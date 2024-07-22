import {configureStore} from '@reduxjs/toolkit'
import userReducer from './Slice/usersSlice'


export const Store = configureStore({
    reducer:{
        Users:userReducer
    }
})