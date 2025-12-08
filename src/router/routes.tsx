import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import {MoviesPage} from "../pages/MoviesPage.tsx";
import {MovieInfo} from "../components/MovieInfo/MovieInfo.tsx";
import {MovieGenre} from "../components/MovieGenre/MovieGenre.tsx";
import {SearchPage} from "../pages/SearchPage.tsx";

export const routes = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children:[
            {index: true, element: <MoviesPage/>},
            {path: 'movie/:id', element: <MovieInfo/>},
            {path: 'genres/:id', element: <MovieGenre/>},
            {path: 'search', element: <SearchPage/>}
        ]}
])