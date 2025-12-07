import './MoviesPage.css'
import {useEffect, useState} from "react";
import type {IMovie} from "../models/IMovie";
import {MoviesList} from "../components/MoviesList/MoviesList.tsx";
import {getMovies} from "../api/getMovies.ts";
import {usePagination} from "../hooks/UsePagination.tsx";
import {Pagination} from "../components/Pagination/Pagination.tsx";

export const MoviesPage = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMovies()
            .then((data) => setMovies(data))
            .catch((err) => console.log("Failed to load movies", err))
            .finally(() => setLoading(false));
    }, []);
    const {currentPage,totalPages,goToPage,currentItems} = usePagination(movies);

    if (loading) return <div>Loading...</div>;
    if (!movies.length) return <div>No movies found</div>;

    return (
        <div className={'movies-page-container'}>
            <MoviesList movies={currentItems} />
            <Pagination  goToPage={goToPage} totalPages={totalPages} currentPage={currentPage} />
        </div>
    );
};
