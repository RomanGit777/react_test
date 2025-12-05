import './MoviesList.css'
import {MovieCard} from "../MovieCard/MovieCard.tsx";
import type {IMovie} from "../../models/IMovie.ts";

interface MoviesListProps {
    movies: IMovie[];
}

export const MoviesList = ({ movies }: MoviesListProps) => {
    if (!movies.length) return <div>No movies found</div>;

    return (
        <div className={'grid'}>
            {movies.map((m) => <MovieCard key={m.id} movie={m} />)}
        </div>
    );
};
