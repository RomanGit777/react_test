import './MoviesPage.css'
import {MoviesList} from "../components/MoviesList/MoviesList.tsx";

export const MoviesPage = () => {
    return (
        <div className={'movies-page-container'}>
            <MoviesList/>
        </div>
    );
};