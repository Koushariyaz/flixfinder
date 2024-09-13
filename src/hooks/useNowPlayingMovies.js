import { useDispatch} from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";




    const useNowPlayingMovies= ()=>{
        
        const dispath= useDispatch();
        let response;
        
        
        const getNowPlayingMovies= async ()=>{
            try
            {const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',options);

              response= await data.json();
             if(!data.ok)
                {
                    throw new Error("Please use VPN to see the website");
                }
            }
            catch(error){
                 alert("Please Use VPN to see the website . Dont't worry the website is safe ");
                 console.log(error);
            }
    
            
            dispath(addNowPlayingMovies(response?.results));
            
           
    
    
        }
    
        useEffect(()=>{
            
            getNowPlayingMovies()
        },[]);
    }

    export default useNowPlayingMovies;

    