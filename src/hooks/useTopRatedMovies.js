import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";




    const useTopRatedMovies= ()=>{
        const dispath= useDispatch();
        const getTopRatedMovies= async ()=>{
            const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',options);
    
            const response= await data.json();
            dispath(addTopRatedMovies(response?.results));
            
            
    
    
        }
    
        useEffect(()=>{
            getTopRatedMovies();
        },[]);
    }

    export default useTopRatedMovies;

    