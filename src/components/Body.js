import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import ClickedMovieCard from "./ClickedMovieCard"


const Body=()=>{
    

const appRouter= createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/browse",
        element: <Browse/>
    },
    {
        path: "/clickedMovie/:mov_id",
        element:<ClickedMovieCard/>
        
    }
])


   

    return (

        <RouterProvider router={appRouter}>

        </RouterProvider>
    )
}

export default Body