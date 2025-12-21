import './SearchMovieList.css'
import {SearchMovieCard} from "../SearchMovieCard/SearchMovieCard.tsx";
import type {IMovieSearch} from "../../models/IMovieSearch.ts";

interface SearchMoviesListProps {
    movies: IMovieSearch[];
}
export const SearchMovieList= ({ movies }: SearchMoviesListProps) => {
    if (!movies.length) return <div className={'failPage'}>
        <p>We couldn't find anything</p>
        <p>Are there any grammatical errors in the request?</p></div> ;
    return (
        <div className={'grid-search-page'} id={'grid-search-page'}>
            {movies.map((m) => <SearchMovieCard key={m.id} movie={m} />)}
        </div>
    );
}


