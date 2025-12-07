import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMoviesByGenre} from "../../api/getMovies.ts";
import type {IMovie} from "../../models/IMovie.ts";
import {MoviesList} from "../MoviesList/MoviesList.tsx";
import {usePagination} from "../../hooks/UsePagination.tsx";
import {Pagination} from "../Pagination/Pagination.tsx";


export const MovieGenre = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState<IMovie[]>([])
    useEffect(() => {
        getMoviesByGenre(String(id)).then(mg => setMovie(mg))
    }, [id])
    const {currentPage,totalPages,goToPage} = usePagination(movie);

    return (
        <div>
            <MoviesList movies={movie} />
            <Pagination  goToPage={goToPage} totalPages={totalPages} currentPage={currentPage} />
        </div>
    );
};