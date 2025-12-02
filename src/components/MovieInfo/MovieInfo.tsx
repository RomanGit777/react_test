import './MovieInfo.css'
import {useEffect, useState} from "react";
import type {IMovie} from '../../models/IMovie';
import {getMovieById} from "../../api/getMovies.ts";
import {useParams} from "react-router-dom";

export const MovieInfo = () => {
    let {id} = useParams();
    const [movie, setMovie] = useState<IMovie | null>(null)
    useEffect(() => {
        if (id) getMovieById(id).then(setMovie);
    }, [id])

    if(!movie) return <div>Loading movie...</div>;
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "/assets/placeholder.jpg";
    return (
        <div className={'info-wrapper'}>
            <img src={posterUrl} alt={movie.title} width={300} />
            <div>
            <h2>{movie.title}</h2>
            <p><svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.05423 0L3.77524 2.21902H6.10846L4.22084 3.59045L4.94185 5.80948L3.05423 4.43804L1.16662 5.80948L1.88762 3.59045L1.14441e-05 2.21902H2.33323L3.05423 0Z" fill="#E5E748"/>
            </svg>{movie.vote_average}</p>
            <p><strong>Description:</strong> {movie.overview}</p>
            </div>
        </div>
    );
};