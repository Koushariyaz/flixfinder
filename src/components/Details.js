import React, { useEffect, useState } from 'react'
import { IMG_CDN_URL, options } from '../utils/constants';

const Details = ({id}) => {

      
      const [details,setDetails] = useState(null);

      const fetchDetails= async()=>{
        const data= await fetch("https://api.themoviedb.org/3/movie/"+id , options);
        const response= await data.json();
        setDetails(response);
      }

      useEffect(()=>{
        fetchDetails()
      },[])
      if(details===null)
        {
            return null;
        }

  return (
    <div className="text-white border border-white ml-4 rounded-xl bg-[#111827] sm:w-[15rem] md:w-[25rem] lg:w-[50rem] mr-5 flex " >
        {/* {console.log(details)} */}
        
         
         <div className="p-5 flex flex-col gap-5">
            <div className="flex gap-4">
                
                <h1 className="font-bold  text-4xl" >{details?.title} <span className="font-semibold text-gray-500">({details?.release_date})</span> </h1>
            </div>

            <div className="flex gap-4">
                <h1 className="font-bold text-lg" >Budget: </h1>
                <h1 className="font-semibold ">Rs {details?.budget}</h1>
            </div>

            <div className="flex gap-4">
                <h1 className="font-bold text-lg" >Revenue: </h1>
                <h1 className="font-semibold ">Rs {details?.revenue}</h1>
            </div>

            <div className="flex gap-4">
                <h1 className="font-bold text-lg" >Popularity: </h1>
                <h1 className="font-semibold ">{details?.popularity}</h1>
            </div>

            <div className="flex gap-4">
                <h1 className="font-bold text-lg" >Vote: </h1>
                <h1 className="font-semibold ">{details?.vote_count}</h1>
            </div>

            <div className="flex gap-4">
                <h1 className="font-bold text-lg" >Release Date: </h1>
                <h1 className="font-semibold ">{details?.release_date}</h1>
            </div>

            <div className="flex gap-4">
                <h1 className="font-bold text-lg" >Genres: </h1>
                <div>
                    {console.log(details)}

                        {details?.genres.map((g)=><h1 className="font-semibold text-white">{g?.name}</h1>)}
                </div>
            </div>


            <div className="flex flex-col gap-2 ">
                <h1 className="font-bold text-xl" >
                    Overview:
                </h1>

                <p>
                    {
                        details?.overview
                    }
                </p>
            </div>
         </div>
         <div className="mr-5 mt-10" >
       
             <img className="rounded-lg w-[70rem]" src={IMG_CDN_URL+ details?.poster_path} alt="movie"/>

        </div>



    </div>
  )
}

export default Details