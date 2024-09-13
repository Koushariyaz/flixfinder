import { useRef, useState } from "react"
import Header from "./Header"
import { Validate } from "../utils/Validate";
import {auth} from "../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";




const Login=()=>{

      const [isSignIn,setIsSignIn]= useState(true);
      const [errorMessage,setErrorMessage]= useState(null);
      const name= useRef();
      const email= useRef();
      const password= useRef();
      const navigate= useNavigate();
      const dispath= useDispatch();


      const toggle= ()=>{
        setIsSignIn(!isSignIn);
      };

      const signInButton=()=>{

       
       const message=  Validate(email.current.value, password.current.value);
       setErrorMessage(message);

       if(message)
        {
          return;
        }
        

        if(!isSignIn)
          {
                      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
                  updateProfile(user, {
                    displayName: name.current.value ,email:email.current.value, 
                  }).then(() => {
                    const {email,displayName,uid}= auth.currentUser;
                      dispath(addUser({uid:uid, displayName:displayName,email:email}))
                      navigate("/browse");
                  
                    
                  }).catch((error) => {
                    
                  });
              
                     
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode+"- "+ errorMessage);
              // ..
            });
          }
          else{

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode+"- "+ errorMessage);
            });

          }
        
      }



    return (
        <div className="w-full h-full">
             <Header/>

             <img className="absolute w-full h-full object-cover contrast-125 brightness-105 "
             
              src="https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             alt="background" />

             <h1 className="text-white absolute text-3x md:text-6xl top-[19%] left-[45%] font-black ">Unlimited Movies, TV Shows and more</h1>

             <div className="absolute  bg-black bg-opacity-10 z-20 left-[15%] top-[5.19rem] w-[10rem]  md:w-[25rem] md:h-[30rem]   rounded-xl flex flex-col justify-center items-center gap-7 p-14 pt-1  hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]   border hover:border-black hover:scale-[1.1190] duration-300  ">  
                 
             
                

                 <form onSubmit={(e)=>{
                  e.preventDefault()
                 }}  className="flex flex-col gap-6 w-[100%] text-white " >


                  <h1 className="text-white text-4xl font-bold mt-6">{!isSignIn?"Sign Up":"Log In"}</h1> 
                                

                        {!isSignIn && <input ref={name} type="text" placeholder="Name" className="rounded-md p-1 bg-transparent h-12 mt-3 border"> 
                              
                               
                             </input>}
                         <input  ref={email} type="email" placeholder="Email" className=" rounded-md p-1 bg-transparent h-12 border">

                         </input>

                         <input ref={password} type="password" placeholder="Password" className=" rounded-md p-1 bg-transparent h-12 border">
                         
                         </input>

                         <p className="font-bold text-md py-1 text-red-600 " >{errorMessage}</p>

                         <button className=" w-[10rem]  rounded-lg    font-semibold text-white mx-auto " onClick={signInButton} >

                                <a href="" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md w-[100%] ">
                                    <span class="w-[100%] h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                    <span class="w-[100%] relative px-6 py-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                          <span class="relative text-white">
                                             {isSignIn?"Log In":"Create Account"}
                                          </span>
                                    </span>
                               </a>
                     
                    </button>

                         {/* <button className="bg-red-700 rounded-md my-2 py-1 h-12 text-lg font-semibold" onClick={signInButton}>      
                            
                            {isSignIn?"Log In":"Create Account"}
                            

                         </button> */}

                         <p className="text-white cursor-pointer" onClick={toggle}>{isSignIn?"Not Registered ? Sign Up":"Already customer? Log IN"}</p>



                         
                 </form>

                 
              </div>

             

             


        </div>
    )
}

export default Login