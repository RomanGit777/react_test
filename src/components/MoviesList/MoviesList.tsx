import './MoviesList.css'
import {MoviesListCard} from "../MoviesListCard/MoviesListCard.tsx";
import type {IMovie} from "../../models/IMovie.ts";

interface MoviesListProps {
    movies: IMovie[];
}

export const MoviesList = ({ movies }: MoviesListProps) => {
    if (!movies.length) return <div>No movies found</div>;

    return (
        <div className={'grid'} id={'grid'}>
            {movies.map((m) => <MoviesListCard key={m.id} movie={m} />)}
        </div>
    );
};
