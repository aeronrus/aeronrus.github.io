import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchPizzaParams } from "../pizza/types";
import { filterSliceState } from "./types";


const initialState: filterSliceState={
  searchValue:'',
  categoryId: 0,
  sortId: 0,
  currentPage: 1,
 
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState:initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>){
      state.categoryId=action.payload
    },
    setSearchValue(state,action: PayloadAction<string>){
      state.searchValue=action.payload
    },
    setSortId(state, action: PayloadAction<number>){
      state.sortId=action.payload
    },
    setCurrentPage(state,action: PayloadAction<number>){
      state.currentPage=action.payload
    },
    setFilters(state,action: PayloadAction<filterSliceState>){
      state.currentPage = Number(action.payload.currentPage)
      state.sortId = Number(action.payload.sortId)
      state.categoryId=Number(action.payload.categoryId)
    }
   
  }
})

export const { setCategoryId, setSortId, setCurrentPage, setFilters, setSearchValue} = filterSlice.actions

export default filterSlice.reducer