import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import {MoviesPage} from "../pages/MoviesPage/MoviesPage.tsx";
import {SearchPage} from "../pages/SearchPage/SearchPage.tsx";
import {MovieDetails} from "../components/MovieDetails/MovieDetails.tsx";
import {MovieGenresPage} from "../pages/MovieGenresPage/MovieGenresPage.tsx";

export const routes = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children:[
            {index: true, element: <MoviesPage/>},
            {path: 'movie/:id', element: <MovieDetails/>},
            {path: 'genres/:id', element: <MovieGenresPage/>},
            {path: 'search', element: <SearchPage/>}
        ]}
])