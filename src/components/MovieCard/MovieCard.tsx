import './MovieCard.css'
import type {IMovie} from "../../models/IMovie.ts";


interface MovieCardProps {
    movie: IMovie
}

export const MovieCard = ({movie}: MovieCardProps) => {
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "/assets/placeholder.jpg";

    const shortOverview = movie.overview ? movie.overview.slice(0, 80) + "…" : "";


    return (
            <div className="card" role="button" tabIndex={0} aria-label={movie.title}>
                    <img className="card-img" src={posterUrl} alt={movie.title} />

                <div className="overlay">
                        <div className="overlay-top">
                            <span className="badge">Genre</span>
                            <span className="rating">★ {Math.round(movie.vote_average * 10) / 10}</span>
                        </div>

                        <h4 className="overlay-title">{movie.title}</h4>
                        <p className="overlay-desc">{shortOverview}</p>
                    </div>
        </div>
    );
};