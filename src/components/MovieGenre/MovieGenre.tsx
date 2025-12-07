import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMoviesByGenre} from "../../api/getMovies.ts";
import type {IMovie} from "../../models/IMovie.ts";
import {MoviesList} from "../MoviesList/MoviesList.tsx";
import {Pagination} from "../Pagination/Pagination.tsx";


export const MovieGenre = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState<IMovie[]>([])
    useEffect(() => {
        getMoviesByGenre(String(id)).then(mg => setMovie(mg))
    }, [id])
    return (
        <div>
            <MoviesList movies={movie} />
            <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage}/>
        </div>
    );
};