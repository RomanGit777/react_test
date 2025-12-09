import {useNavigate} from "react-router-dom";
import {GENRE_MAP} from "../../constants/genres.ts";
import {PosterPreview} from "../PosterPreview/PosterPreview.tsx";
import {StarsRating} from "../StarsRating/StarsRating.tsx";
import {GenreBadge} from "../GenreBadge/GenreBadge.tsx";
import type {IMovieSearch} from "../../models/IMovieSearch.ts";


interface SearchMovieCardProps {
    movie: IMovieSearch
}

export const SearchMovieCard = ({movie}: SearchMovieCardProps) => {
    const navigate = useNavigate();

    const shortOverview = movie.overview ? movie.overview.slice(0, 80) + "…" : "";


    return (
        <div className="card" role="button" tabIndex={0} aria-label={movie.title}
             onClick={() => navigate(`/movie/${movie.id}`)} >
            <PosterPreview title={movie.title} posterPath={movie.poster_path} className={'card-img'} />

            <div className="overlay">
                <div className="overlay-top">
                            <span className={'badge'}>
                                {movie.genre_ids!.map(id => (
                                    <GenreBadge key={id} id={id} label={GENRE_MAP[id]} className="me-1"/>
                                ))}
                            </span>
                    <StarsRating rating={movie.vote_average} className={'rating'}/>
                </div>

                <h4 className="overlay-title">{movie.title}</h4>
                <p className="overlay-desc">{shortOverview}</p>
            </div>
        </div>
    );
};