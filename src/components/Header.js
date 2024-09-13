import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header= ()=>{

    const dispath = useDispatch();
    const navigate= useNavigate();
    const gpt= useSelector(store=>store.gpt.showGptSearch);
    

    const user= useSelector((appStore)=>appStore.user)

   

    const handleSignOut= ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            dispath(removeUser());
            
            // navigate("/");


          }).catch((error) => {
            // An error happened.
          });
    };

    const handleGptSearchClick= ()=>{

      dispath(toggleGptSearchView());
      
    }
    const handleLanguageChange=(e)=>{
      
      dispath(changeLanguage(e.target.value));
    }

    


    useEffect(()=>{


       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const {uid,email,displayName} = user;
    
              dispath(addUser({uid:uid, email:email, displayName:displayName}));
              navigate("/browse");
    
    
              
            } else {
    
                dispath(removeUser())
                navigate("/");
              
            }
          });

          

          return ()=> unsubscribe();
                 
              
       },[]);
    return (
        <div className=" absolute  w-screen bg-gradient-to-b from-black  z-50  flex  px-4 h-20">
            <div className="w-44">
                    <img className="w-48 contrast-150"
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
                    alt="logo"/>

            
            </div>

           {user && <div className=" z-10 mx-5 my-3 flex flex-col lg:flex-row  justify-between gap-2 cursor-pointer w-screen" >


                         <div className="flex gap-6 items-baseline">
                                 
                            <select className=" w-15 h-5 md:w-20 md:h-8 rounded-md" onChange={handleLanguageChange}>
                    {SUPPORTED_LANGUAGES.map((lang)=>  <option value={lang.identifier} key={lang.identifier}>{lang.name}</option>)}
                  </select>

                    <button className=" w-14   md:w-40 md:h-10 p-2 rounded-lg  mr-5 font-semibold text-white " onClick={handleGptSearchClick} >

                    <a href="#_" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
<span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
<span class="relative px-6 py-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
<span class="relative text-white"> {gpt ? "Homepage":"GPT Search"}</span>
</span>
</a>
                     
                    </button>
                            
                         </div>




                         <button type="button" onClick={handleSignOut} className="font-bold text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[4rem] md:w-[8rem]">
                         Sign Out →
                          </button>


           
                    {/* <div className="sm:w-10 md:w-20 lg:w-32 bg-red-700  rounded-2xl text-center p-4 mr-4" >
                    

                       <p className="text-white font-bold" onClick={handleSignOut} >Sign Out</p>

                    </div> */}

            </div>}
        

        </div>
    )
}

export default Header