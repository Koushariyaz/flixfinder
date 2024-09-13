import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  if(poster_path==null)
    {
      return;
    }
  return (
    <div className="w-24  lg:w-40 hover:scale-[1.070001] duration-[370ms] m-2  mt-6 mb-7 hover:shadow-[0_10px_20px_rgba(180,_48,_170,_0.9)] grayscale hover:grayscale-0 ">
       
        <img className="rounded-lg" src={IMG_CDN_URL+ poster_path} alt="movie"/>

    </div>
  )
}

export default MovieCard