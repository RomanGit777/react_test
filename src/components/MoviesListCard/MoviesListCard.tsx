import type {IMovie} from "../../models/IMovie.ts";
import {MovieInfo} from "../MovieInfo/MovieInfo.tsx";


interface MovieCardProps {
    movie: IMovie
}

export const MoviesListCard = ({movie}: MovieCardProps) => {

    const shortOverview = movie.overview ? movie.overview.slice(0, 80) + "…" : "";

    return (
                <MovieInfo movie={movie} shortOverview={shortOverview}/>
    );
};