import './MoviesPage.css'
import {MoviesList} from "../components/MoviesList/MoviesList.tsx";
import {MovieInfo} from "../components/MovieInfo/MovieInfo.tsx";

export const MoviesPage = () => {
    return (
        <div className={'movies-page-container'}>
            <MovieInfo/>
            <MoviesList/>
        </div>
    );
};