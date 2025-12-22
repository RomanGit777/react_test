import stylesMovieDetails from './MovieDetails.module.css'
import {useNavigate, useParams} from "react-router-dom";
import {PosterPreview} from "../PosterPreview/PosterPreview.tsx";
import {StarsRating} from "../StarsRating/StarsRating.tsx";
import {GenreBadge} from "../GenreBadge/GenreBadge.tsx";
import {useMovieById} from "../../queries/useMovieById.ts";
import {useEffect} from "react";

export const MovieDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {data: movie, isLoading, error} = useMovieById(id);
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id])

    if (!id) return <div>No movie ID provided...</div>
    if (isLoading) return <div>Movie loading...</div>
    if (error) return <div>Error: {error.message}</div>;
    if (!movie) return <div>No movie found.</div>;


    return (
        <div className={stylesMovieDetails.infoWrapper} id={'infoWrapper'}>
            <PosterPreview posterPath={movie.poster_path} title={movie.title} className={stylesMovieDetails.infoImg}  />
            <div>
                <h2>{movie.title}</h2>
                <span className={stylesMovieDetails.badges} id={'badges'}>
                    {movie.genres?.map(genre => (
                        <GenreBadge key={genre.id} id={genre.id} label={genre.name} className="me-1" onClick={() => navigate(`/genres/${genre.id}`)} />
                    ))}
                </span>
                <StarsRating rating={movie.vote_average}/>
                <p className={stylesMovieDetails.desc}><strong>Description:</strong> {movie.overview}</p>
                <p><strong>Release date:</strong> {movie.release_date}</p>
                <p><strong>Original Language:</strong> {movie.original_language}</p>
            </div>
        </div>
    );
};