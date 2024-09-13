import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";




    const usePopularMovies= ()=>{
        const dispath= useDispatch();
        const getPopularMovies= async ()=>{
            const data= await fetch("https://api.themoviedb.org/3/movie/popular?page=1",options);
    
            const response= await data.json();
            dispath(addPopularMovies(response?.results));
            
            
    
    
        }
    
        useEffect(()=>{
            getPopularMovies();
        },[]);
    }

    export default usePopularMovies;

    