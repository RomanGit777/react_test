import './MoviesList.css'
import {MoviesListCard} from "../MoviesListCard/MoviesListCard.tsx";
export const MoviesList = () => {
    return (
        <div className={'movies-list-wrapper'}>
            <MoviesListCard/>
        </div>
    );
};