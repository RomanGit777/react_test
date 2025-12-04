import './MovieCard.css'
import type {IMovie} from "../../models/IMovie.ts";
import {useNavigate} from "react-router-dom";
import {Badge} from "reactstrap";
import {GENRE_MAP} from "../../constants/genres.ts";
import {PosterPreview} from "../PosterPreview/PosterPreview.tsx";
import {StarsRating} from "../StarsRating/StarsRating.tsx";


interface MovieCardProps {
    movie: IMovie
}

export const MovieCard = ({movie}: MovieCardProps) => {
let navigate = useNavigate();

    const shortOverview = movie.overview ? movie.overview.slice(0, 80) + "…" : "";


    return (
            <div className="card" role="button" tabIndex={0} aria-label={movie.title}
                 onClick={() => navigate(`/movie/${movie.id}`)} >
                    <PosterPreview title={movie.title} posterPath={movie.poster_path} className={'card-img'} />

                <div className="overlay">
                        <div className="overlay-top">
                           <span className={'badge'}> {movie.genre_ids!.map(id => (
                               <Badge key={id} color="info" className="me-1">
                                    {GENRE_MAP[id]}
                                </Badge>
                            ))}</span>
                            <StarsRating rating={movie.vote_average} className={'rating'}/>
                        </div>

                        <h4 className="overlay-title">{movie.title}</h4>
                        <p className="overlay-desc">{shortOverview}</p>
                    </div>
        </div>
    );
};