import { createSlice } from "@reduxjs/toolkit";

const UsersSlice = createSlice({
    name:"Users",
    initialState:{
        users:[]
    },
    reducers:{

    }
})

export const {} = UsersSlice.actions;
export default UsersSlice.reducer;