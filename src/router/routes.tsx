import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import {MoviesPage} from "../pages/MoviesPage.tsx";

export const routes = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children:[
            {path: 'movies', element: <MoviesPage/>}
        ]}
])