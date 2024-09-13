import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";




    const useUpcomingMovies= ()=>{
        const dispath= useDispatch();
        const getUpcomingMovies= async ()=>{
            const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',options);
    
            const response= await data.json();
            dispath(addUpcomingMovies(response?.results));
            
           
    
    
        }
    
        useEffect(()=>{
            getUpcomingMovies();
        },[]);
    }

    export default useUpcomingMovies;

    