import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom';

const MovieList = ({title,movies}) => {
    if(movies==null)
        {
            return;
        }
  return (
    <div className="mx-9 my-10">

         <h1 className="text-amber-400 font-bold text-lg lg:text-3xl ">{title}</h1>
        
        
             
        <div className="flex overflow-x-scroll no-scrollbar">
              
              <div className="flex ">
                  
                  {movies.map((movie)=> <Link to={"/clickedMovie/"+ movie.id}>
                        
                    <MovieCard key={movie.id} poster_path={movie?.poster_path}/>
                  
                  </Link>)}
  
              </div>
  
          </div>
        
        
        
        
    </div>
  )
}

export default MovieList