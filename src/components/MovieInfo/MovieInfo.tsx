import stylesMovieInfo from './MovieInfo.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview.tsx";
import {GenreBadge} from "../GenreBadge/GenreBadge.tsx";
import {GENRE_MAP} from "../../constants/genres.ts";
import {StarsRating} from "../StarsRating/StarsRating.tsx";
import {useNavigate} from "react-router-dom";
import type {IMovieSearch} from "../../models/IMovieSearch.ts";
import type { IMovie } from "../../models/IMovie.ts";
export interface MovieInfoProps {
    movie: IMovie | IMovieSearch;
    shortOverview?: string;
}
export const MovieInfo = ({movie,shortOverview}: MovieInfoProps) => {
    let navigate = useNavigate();

    return (
        <div className={stylesMovieInfo.card} role="button" tabIndex={0} aria-label={movie.title}
             onClick={() => navigate(`/movie/${movie.id}`)} >
            <PosterPreview title={movie.title} posterPath={movie.poster_path} className={stylesMovieInfo.cardImg} />

            <div className={stylesMovieInfo.overlay}>
                <div className={stylesMovieInfo.overlayTop}>
                            <span className={stylesMovieInfo.badge}>
                                {movie.genre_ids!.map(id => (
                                    <GenreBadge key={id} id={id} label={GENRE_MAP[id]} className="me-1"/>
                                ))}
                            </span>
                    <StarsRating rating={movie.vote_average} className={'rating'}/>
                </div>

                <h4 className={stylesMovieInfo.overlayTitle}>{movie.title}</h4>
                <p className={stylesMovieInfo.overlayDesc}>{shortOverview}</p>
            </div>
        </div>
    );
};