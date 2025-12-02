import './MoviesList.css'
import {MovieCard} from "../MovieCard/MovieCard.tsx";
import {useEffect, useState} from "react";
import type {IMovie} from "../../models/IMovie.ts";
import {getMovies} from "../../api/getMovies.ts";
export const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getMovies().then((data) => setMovies(data))
            .catch((err) =>
                console.log('Failed to load movies', err))
            .finally(() => setLoading(false))
    },[])

    if(loading) return <div>Loading...</div>
    if(!movies.length) return <div>No movies found</div>

    return (
        <div className={'grid'}>
            {movies.map((m) =>
                <MovieCard key={m.id} movie={m} />)}
        </div>
    );
};