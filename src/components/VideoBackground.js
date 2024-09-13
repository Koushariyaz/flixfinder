import React, { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addMovieTrailer } from '../utils/moviesSlice';

const VideoBackground = ({movieId}) => {

  const trailerVideo= useSelector((store)=>store.movies?.movieTrailer);
  const dispatch= useDispatch();

    const getMovieVideos= async ()=>{
      if(trailerVideo!=null)
        {
          console.log("movie replay");
          return;
        }
        console.log("movie play")
      
       const data= await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",options);
       const response= await data.json();
       
       
        
       const filteredData= response?.results?.filter((movie)=>movie?.type==="Trailer");
        
       const mainMovie= filteredData.length===0?response[0]:filteredData[0];
       
       dispatch(addMovieTrailer(mainMovie));
       

    }

    useEffect(()=>{

        getMovieVideos();
        },[])

        


  return (
    <div className="w-screen">

<iframe className="w-screen aspect-video"
 src={"https://www.youtube.com/embed/hXzcyx9V0xw?si="+ trailerVideo+"?&autoplay=1&mute=1&loop=1"} 
 title='Youtube Trailer'
 
  
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
     >

     </iframe>
    </div>
  )
}

export default VideoBackground