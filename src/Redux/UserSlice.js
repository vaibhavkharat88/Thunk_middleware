import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Myuser=createAsyncThunk('/user',async()=>{
    const response= await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data
})

const UserSlice=createSlice({
    name:'user',
    initialState:{
        isLoading:false,
        data:null,
        isError:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(Myuser.pending,(state,action)=>{
            state.isLoading=true
        })
        builder.addCase(Myuser.fulfilled,(state,action)=>{
            state.isLoading=false
            state.data=action.payload
        })
        builder.addCase(Myuser.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            console.log("error",action.error.message)

        })
    }
})

export default UserSlice.reducer