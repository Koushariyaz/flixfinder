import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="px-36 pt-32 absolute w-screen aspect-video bg-gradient-to-r from-black ">
        <h1 className="md:text-3xl sm:text-xl lg:text-6xl font-bold my-2 text-white absolute top-44">{title}</h1>
        <h2 className=" hidden lg:inline-block font-semibold text-lg text-white absolute top-[17rem] w-[22rem]">{overview}</h2>

        <div className="flex gap-10 mt-5 absolute top-[28rem]">
            <button className="hidden lg:bg-white border-solid font-bold px-4 rounded-lg hover:bg-opacity-80">
            <i class="fa-solid fa-play mr-2"></i>
                Play
            </button>

            <button className="hidden lg:bg-gray-400 p-[0.58rem] rounded-lg text-white font-bold">

            <i class="fa-solid fa-circle-info mr-2"></i>
                More Info
            </button>
        </div>


    </div>
  )
}

export default VideoTitle