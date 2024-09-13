import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies= useSelector((store)=> store?.movies);
  return (
    <div className="bg-black text-white will-change-auto">
         
               <div className="mt-0 md:-mt-96  relative z-100">
                      <MovieList title={"Now Playing Movie"} movies={movies?.nowPlayingMovies}/>
                      <MovieList title={"Popular"} movies={movies?.popularMovies} />
                      <MovieList title={"Top Rated "} movies={movies?.topRatedMovies} />
                      <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
               </div>

    </div>
  )
}

export default SecondaryContainer