import React from 'react'
import VideoContainer from './VideoContainer'
import Details from './Details'
import { useParams } from 'react-router-dom'


const ClickedMovieCard = () => {
  const {mov_id}= useParams();
  return (
    <div className="bg-black w-screen h-screen flex flex-row justify-between">
      
      <VideoContainer id={mov_id}/>
      <Details id={mov_id} />
       
    </div>
  )
}

export default ClickedMovieCard