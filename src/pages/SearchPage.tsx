import './SearchPage.css'
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMoviesBySearch} from "../api/getMovies.ts";
import type {IMovieSearch} from "../models/IMovieSearch.ts";
import {PosterPreview} from "../components/PosterPreview/PosterPreview.tsx";

export const SearchPage = () => {
   const [params] = useSearchParams();
   const query = params.get("query") ?? "";

    const [movies, setMovies] = useState<IMovieSearch[]>([]);
    const [loading, setLoading] = useState(false);

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
        <div className={'search-page-wrapper'}>
            {loading && <div>Loading...</div>}
            {!loading && movies.map((movie) =>
                <div key={movie.id}>
                    {movie.title}
                    <PosterPreview title={movie.title} posterPath={movie.poster_path}/>
                </div>)}
        </div>
    );
};