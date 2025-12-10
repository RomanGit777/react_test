import type {IMovieSearch} from "../../models/IMovieSearch.ts";
import {MovieInfo} from "../MovieInfo/MovieInfo.tsx";


interface SearchMovieCardProps {
    movie: IMovieSearch
}

export const SearchMovieCard = ({movie}: SearchMovieCardProps) => {

    const shortOverview = movie.overview ? movie.overview.slice(0, 80) + "…" : "";

    return (
        <>
            <MovieInfo movie={movie} shortOverview={shortOverview}/>
        </>
    );
};