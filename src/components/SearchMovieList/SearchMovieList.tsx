import './SearchMovieList.css'
import {SearchMovieCard} from "../SearchMovieCard/SearchMovieCard.tsx";
import type {IMovieSearch} from "../../models/IMovieSearch.ts";

interface SearchMoviesListProps {
    movies: IMovieSearch[];
}
export const SearchMovieList= ({ movies }: SearchMoviesListProps) => {
    if (!movies.length) return <div>No movies found</div>;
    return (
        <div className={'grid-search-page'} id={'grid-search-page'}>
            {movies.map((m) => <SearchMovieCard key={m.id} movie={m} />)}
        </div>
    );
}


