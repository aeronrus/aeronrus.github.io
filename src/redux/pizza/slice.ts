import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {PizzaSliceState, SearchPizzaParams, Status, Pizza } from './types'





const initialState: PizzaSliceState = {
  pizzas: [],
  status: Status.LOADING
};




export const fetchPizzas=createAsyncThunk <Pizza[], SearchPizzaParams>(
  'pizza/fetchPizzaStatus ', 
  async (params)=>{
    const{sortId,sorts, search,searchCategory,currentPage}=params
    const {data} = await axios.get<Pizza[]>(
      `https://63905cbd0bf398c73a84e157.mockapi.io/items?page=${currentPage}&limit=4&${searchCategory}&sortBy=${sorts[sortId]}&order`);
     return data 
    }
)

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState:initialState,
  reducers: {
    setPizzas(state,action: PayloadAction<Pizza[]>){
      state.pizzas=action.payload
    }
  },
extraReducers: (builder)=>{
  builder.addCase(fetchPizzas.pending, (state)=>{
    state.status=Status.LOADING
    state.pizzas=[]
  })
  builder.addCase(fetchPizzas.fulfilled, (state, action)=>{
    state.status=Status.SUCESS
    state.pizzas=action.payload
  })
  builder.addCase(fetchPizzas.rejected, (state)=>{
    state.status= Status.ERROR
    state.pizzas=[]
  })
}

})

export const {setPizzas} = pizzaSlice.actions

export default pizzaSlice.reducer