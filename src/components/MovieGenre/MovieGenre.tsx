import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMoviesByGenre} from "../../api/getMovies.ts";
import type {IMovie} from "../../models/IMovie.ts";
import {MoviesList} from "../MoviesList/MoviesList.tsx";
import {usePagination} from "../../hooks/UsePagination.tsx";
import {Pagination} from "../Pagination/Pagination.tsx";


export const MovieGenre = () => {
    const {id} = useParams();
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getMoviesByGenre(String(id)).then(mg => setMovies(mg))
        .catch((err) => console.log("Failed to load movies", err))
        .finally(() => setLoading(false));
    }, [id])

    const {currentPage,totalPages,goToPage,currentItems} = usePagination(movies);
    if (loading) return <div>Loading...</div>;
    if (!movies.length) return <div>No movies found</div>;
    return (
        <div className={'genres-page-wrapper'}>
            <MoviesList movies={currentItems} />
            <Pagination  goToPage={goToPage} totalPages={totalPages} currentPage={currentPage} />
        </div>
    );
};