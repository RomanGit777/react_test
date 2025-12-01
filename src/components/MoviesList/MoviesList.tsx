import './MoviesList.css'
import {MovieCard} from "../MovieCard/MovieCard.tsx";
export const MoviesList = () => {
    return (
        <div className={'movies-list-wrapper'}>
            <MovieCard/>
        </div>
    );
};