import './MovieCard.css'
import {useEffect, useState} from "react";
import type {IMovie} from "../../models/IMovie.ts";
import {getMovies} from "../../api/movieSeries.ts";


export const MovieCard = () => {
const [movie, setMovie] = useState<IMovie[]>([])
useEffect(() => {
    getMovies().then(movies => setMovie(movies))
},[])
    return (
        <div className={'movie-card-wrapper'}>
            <div className={'carousel'}>
                <div className={'grid'}>
                    <div  className={'card'}> {movie.map(movie =>
                            <div key={movie.id}>
                                <img
                                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                alt={movie.title}
                                />
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};