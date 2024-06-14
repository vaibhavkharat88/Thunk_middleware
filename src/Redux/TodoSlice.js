import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const Mytodos=createAsyncThunk('fetch/todos',async()=>{
    const response=await axios.get('https://dummyjson.com/todos');
    return response.data
})



const TodoSlice=createSlice({
    name:'todo',
    initialState:{
        isloading:false,
        data:null,
        isError:false,
    },
    reducers:{},
    extraReducers:(builder)=>{
        //pending state
        builder.addCase(Mytodos.pending,(state)=>{
            state.isloading=true;

        })
        builder.addCase(Mytodos.fulfilled,(state,action)=>{
            //fulfilled
            state.isloading=false;
            // data set
            state.data=action.payload
        })
        builder.addCase(Mytodos.rejected,(state,action)=>{
            state.isloading=false
            state.isError=true
            console.log("error",action.error.message)
        })



    }
})

export default TodoSlice.reducer