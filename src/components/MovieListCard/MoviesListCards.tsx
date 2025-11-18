import './MovieListCard.module.css'
import {useEffect, useState} from "react";
import type {IMovie} from "../../models/IMovie.ts";
import {getMovies} from "../../api/movieSeries.ts";

export const MoviesListCards = () => {
    const [movies, setMovies] = useState<IMovie[] | null>(null);
    useEffect(() => {
        getMovies().then(data => setMovies(data))
    },[])
    return (
        <div>
            {
            movies && movies.map((movie) => (
                <div  className={'MoviesListCards'} key={movie.id}>{movie.title}</div>
            ))
        }
        </div>
    );
};