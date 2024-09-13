import React, { useEffect, useState } from 'react'
import { options } from '../utils/constants';

const VideoContainer = ({id}) => {


    let [videos,setVideos]= useState(null);

    const fetchVideo=async ()=>{
        const data= await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos", options)
        const response= await data.json();
        setVideos(response);
    }

    useEffect(()=>{
        fetchVideo()
    },[])

    

    if(videos?.results.length===0)
        {
            return <h2 className="text-white text-center">Oops!! Trailer is not available</h2>;
        }


  return (
    <div className="sm:w-[10rem] md:w-[20rem]  lg:w-1/2 pt-6" >
        {
            console.log(videos)
        }
           <iframe width="760" height="415" src={"https://www.youtube.com/embed/"+videos?.results[0]?.key} 
           title="YouTube video player" 
        //    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           referrerpolicy="strict-origin-when-cross-origin" 
           allowFullScreen
           >

           </iframe>
    </div>
  )
}

export default VideoContainer