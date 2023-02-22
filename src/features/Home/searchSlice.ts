import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from '../../app/store';

export type searchState =  {selectedCategory:string , isLoading:boolean}

const initialState:searchState = {
    selectedCategory:'Coding',
    isLoading:false
}

export const SearchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
        search: (state , action) =>{
            state.selectedCategory =  action.payload
        },
        loading: (state ) =>{
            state.isLoading = !state.isLoading;
        }
    }
});

export const selectSearched = (state:RootState) => state.search.selectedCategory
export const selectIsloading = (state:RootState) => state.search.isLoading

export const {search , loading} = SearchSlice.actions ;
export default SearchSlice.reducer;