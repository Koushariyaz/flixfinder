import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies:null,
        movieTrailer:null,
        upcomingMovies:null,
        topRatedMovies:null,
        popularMovies:null,
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies= action.payload;
        },
        addMovieTrailer: (state,action)=>{
            state.movieTrailer= action.payload;
        },
        addPopularMovies: (state,action)=>{
            state.popularMovies= action.payload;
        },
        addTopRatedMovies: (state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies= action.payload;
        }

    },


})

export default moviesSlice.reducer;
export const {addNowPlayingMovies,addMovieTrailer,addUpcomingMovies,addTopRatedMovies,addPopularMovies}= moviesSlice.actions;