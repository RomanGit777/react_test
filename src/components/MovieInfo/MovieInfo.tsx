import './MovieInfo.css'
import {useEffect, useState} from "react";
import type {IMovie} from '../../models/IMovie';
import {getMovieById} from "../../api/getMovies.ts";
import {useParams} from "react-router-dom";
import {PosterPreview} from "../PosterPreview/PosterPreview.tsx";
import {StarsRating} from "../StarsRating/StarsRating.tsx";
import {GenreBadge} from "../GenreBadge/GenreBadge.tsx";

export const MovieInfo = () => {
    let {id} = useParams();
    const [movie, setMovie] = useState<IMovie | null>(null)
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
                        <GenreBadge key={genre.id} id={genre.id} label={genre.name} className="me-1" />
                    ))}
                </span>
                <StarsRating rating={movie.vote_average} className={'rating'}/>
                <p className={'description'}><strong>Description:</strong> {movie.overview}</p>
            </div>
        </div>
    );
};