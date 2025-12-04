import './MovieCard.css'
import type {IMovie} from "../../models/IMovie.ts";
import {useNavigate} from "react-router-dom";
import {Badge} from "reactstrap";
import {GENRE_MAP} from "../../constants/genres.ts";
import {PosterPreview} from "../PosterPreview/PosterPreview.tsx";


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
                            <span className="rating">
                                <svg width="5" height="5" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.05423 0L3.77524 2.21902H6.10846L4.22084 3.59045L4.94185 5.80948L3.05423 4.43804L1.16662 5.80948L1.88762 3.59045L1.14441e-05 2.21902H2.33323L3.05423 0Z" fill="#E5E748"/>
</svg>
                                <span>{movie.vote_average}</span>
                            </span>
                        </div>

                        <h4 className="overlay-title">{movie.title}</h4>
                        <p className="overlay-desc">{shortOverview}</p>
                    </div>
        </div>
    );
};