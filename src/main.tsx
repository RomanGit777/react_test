import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MoviesPage} from "./pages/MoviesPage.tsx";
import {MoviesList} from "./components/MoviesList.tsx";

export const routes = createBrowserRouter([
    {path:'/', element: <MoviesPage/>, children: [
            {index:true, element: <MoviesList/>}
        ]}
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={routes}/>
)
