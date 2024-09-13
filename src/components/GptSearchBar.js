import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import genAI from '../utils/openai'
import { options } from '../utils/constants'
import { addGptMovies, clearGptMovies } from '../utils/gptSlice'
import { HarmBlockThreshold, HarmCategory } from '@google/generative-ai'








const GptSearchBar = () => {

  const langKey= useSelector((store)=>store.config.lang);
  const searchText= useRef(null);
  const dispatch= useDispatch();

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
  ];

  const searchMovieTMDB= async (movie)=>{
   const data= await fetch('https://api.themoviedb.org/3/search/movie?query='+movie, options)
   const response=await data.json();
  //  console.log(response.results);
   return response.results;
  }
  const handleGptSearchClick= async ()=> {
    dispatch(clearGptMovies());


    const modified_query= "Provide me with a list of 6 highly-rated movies that are"+ searchText.current.value+"and released in the last 10 years ,please only provide the names with comma seperated and nothing else";
    
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest"},safetySettings);

    
  
    const result = await model.generateContent(modified_query);
    
    const response =   result.response;
    // console.log(response);
    const text = response.text();
    console.log(text);
    const gptMovies= text.split(",");

    console.log(gptMovies);

    const promiseArray=  gptMovies.map((movie)=>searchMovieTMDB(movie));

    const tmdbMovies= await  Promise.all(promiseArray);
    console.log(tmdbMovies);
    dispatch(addGptMovies({moviesNames:gptMovies, moviesResults:tmdbMovies}));


  }

  

  return (
    <div className="pt-[8%] flex justify-center mb-4 rounded-3xl " >
        <form className=" grid grid-cols-12 bg-black w-1/2" onSubmit={(e)=>{
          e.preventDefault();
        }}>
            <input ref={searchText} type="text" className="p-4 m-4 col-span-9 rounded-lg" placeholder={lang[langKey].gptPlaceholder}/>
            <button className="col-span-3 m-4 py-2 px-4 bg-red-700 rounded-lg" onClick={handleGptSearchClick}>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar