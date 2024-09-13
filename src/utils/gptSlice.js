import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptMovies:null,
        gptMoviesNames:null,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch= !state.showGptSearch;
        },
        addGptMovies:(state,action)=>{
            const {moviesNames, moviesResults}= action.payload;

            state.gptMovies= moviesResults;
            state.gptMoviesNames= moviesNames;
        },
        clearGptMovies:(state,action)=>{
            state.gptMovies=null
        }
        
    }
});

export default gptSlice.reducer
export const {toggleGptSearchView,addGptMovies,clearGptMovies}= gptSlice.actions;