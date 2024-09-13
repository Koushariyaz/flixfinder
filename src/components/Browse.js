import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = ()=>{
    const showGpt= useSelector(store=>store.gpt.showGptSearch);
    
    



    
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    

    return (
        <div className="w-screen bg-black">
            <Header/>
            {/* <img className="absolute w-full h-screen object-fit
             -z-10"
             
             src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="background" /> */}
            {
                showGpt ?<GptSearch/>:<>
                 <MainContainer/>
            <SecondaryContainer/>
                </>
            }
             
            

            
        </div>
    )
}

export default Browse