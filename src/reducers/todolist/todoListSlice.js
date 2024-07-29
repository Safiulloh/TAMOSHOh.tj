import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const getTodo = createAsyncThunk("todoList/getTodo", async () => {
    const { data } = await axios.get("http://localhost:3000/subcategory");

    return data;
});


export const getById = createAsyncThunk("todoList/getById", async (id) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/subcategory/${id}`
    );
    return data;
  } catch (error) {
    console.error("getById:" + error);
  }
});



export const todoListSlice = createSlice({
  name: 'todolist',
  initialState: {
    data:[],
    dataById:[]
 },
  reducers: {},
  extraReducers:(builder)=>{

    builder.addCase(getTodo.fulfilled,(state,action)=>{
        state.data = action.payload
    })
    builder.addCase(getById.fulfilled, (state, action) => {
      state.dataById = action.payload;
    });

 }
})



export default todoListSlice.reducer