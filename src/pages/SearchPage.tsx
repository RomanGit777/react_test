import './SearchPage.css'
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMoviesBySearch} from "../api/getMovies.ts";
import type {IMovieSearch} from "../models/IMovieSearch.ts";
import {PosterPreview} from "../components/PosterPreview/PosterPreview.tsx";
import {GenreBadge} from "../components/GenreBadge/GenreBadge.tsx";
import {GENRE_MAP} from "../constants/genres.ts";
import {StarsRating} from "../components/StarsRating/StarsRating.tsx";
import {usePagination} from "../hooks/UsePagination.tsx";
import {Pagination} from "../components/Pagination/Pagination.tsx";

export const SearchPage = () => {
   const [params] = useSearchParams();
   const query = params.get("query") ?? "";
   const navigate = useNavigate();

    const [movies, setMovies] = useState<IMovieSearch[]>([]);
    const [loading, setLoading] = useState(false);
    const {currentPage,totalPages,goToPage} = usePagination(movies);

    useEffect(() => {
        if(!query.trim()) {
            setMovies([]);
            return;
        }
        setLoading(true);
        getMoviesBySearch(query)
            .then(setMovies)
            .finally(() => setLoading(false));
    }, [query])
    return (
        <div className="search-page-wrapper">
            {loading && <div>Loading...</div>}

            {!loading && movies.map((movie) => (
                <div
                    key={movie.id}
                    className="card"
                    role="button"
                    tabIndex={0}
                    aria-label={movie.title}
                    onClick={() => navigate(`/movie/${movie.id}`)}
                >
                    <PosterPreview
                        title={movie.title}
                        posterPath={movie.poster_path}
                        className="card-img"
                    />

                    <div className="overlay">
                        <div className="overlay-top">
                        <span className="badge">
                            {movie.genre_ids!.map((id) => (
                                <GenreBadge
                                    key={id}
                                    id={id}
                                    label={GENRE_MAP[id]}
                                    className="me-1"
                                />
                            ))}
                        </span>

                            <StarsRating
                                rating={movie.vote_average}
                                className="rating"
                            />
                        </div>

                        <h4 className="overlay-title">{movie.title}</h4>
                        {/*<p className="overlay-desc">{shortOverview}</p>*/}
                    </div>
                </div>
            ))}
            <Pagination  goToPage={goToPage} totalPages={totalPages} currentPage={currentPage} />

        </div>
    )};
