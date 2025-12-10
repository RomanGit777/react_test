import './MovieDetails.css'
import {useEffect, useState} from "react";
import type {IMovie} from '../../models/IMovie';
import {getMovieById} from "../../api/getMovies.ts";
import {useNavigate, useParams} from "react-router-dom";
import {PosterPreview} from "../PosterPreview/PosterPreview.tsx";
import {StarsRating} from "../StarsRating/StarsRating.tsx";
import {GenreBadge} from "../GenreBadge/GenreBadge.tsx";

export const MovieDetails = () => {
    let {id} = useParams();
    const [movie, setMovie] = useState<IMovie | null>(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (id) getMovieById(id).then(setMovie);
    }, [id])

    if(!movie) return <div>Loading movie...</div>;

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className={'info-wrapper'}>
            <PosterPreview posterPath={movie.poster_path} title={movie.title} className={'info-img'} />
            <div>
                <h2>{movie.title}</h2>
                <span className={'badges'}>
                    {movie.genres?.map(genre => (
                        <GenreBadge key={genre.id} id={genre.id} label={genre.name} className="me-1" onClick={() => navigate(`/genres/${genre.id}`)} />
                    ))}
                </span>
                <StarsRating rating={movie.vote_average} className={'rating'}/>
                <p className={'description'}><strong>Description:</strong> {movie.overview}</p>
                <p><strong>Release date:</strong> {movie.release_date}</p>
                <p><strong>Original Language:</strong> {movie.original_language}</p>
                <p><strong>Popularity:</strong> {movie.popularity}</p>
            </div>
        </div>
    );
};