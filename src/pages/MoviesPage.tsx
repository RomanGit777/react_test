import {MoviesList} from "../components/MoviesList.tsx";
import {Outlet} from "react-router-dom";

export const MoviesPage = () => {

    return (
        <div>
            <Outlet/>
            <MoviesList/>
        </div>
    );
};