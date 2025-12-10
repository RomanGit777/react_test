import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import {MoviesPage} from "../pages/MoviesPage.tsx";
import {MovieGenre} from "../components/MovieGenre/MovieGenre.tsx";
import {SearchPage} from "../pages/SearchPage.tsx";
import {MovieDetails} from "../components/MovieDetails/MovieDetails.tsx";

export const routes = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children:[
            {index: true, element: <MoviesPage/>},
            {path: 'movie/:id', element: <MovieDetails/>},
            {path: 'genres/:id', element: <MovieGenre/>},
            {path: 'search', element: <SearchPage/>}
        ]}
])