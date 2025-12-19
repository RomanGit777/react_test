import {useParams} from "react-router-dom";
import {MoviesList} from "../MoviesList/MoviesList.tsx";
import {usePagination} from "../../hooks/UsePagination.tsx";
import {Pagination} from "../Pagination/Pagination.tsx";
import {useMoviesByGenre} from "../../queries/useMoviesByGenre.ts";


export const MovieGenre = () => {
    const {id} = useParams();
    const {data: movies, isLoading, error } = useMoviesByGenre(id);

    const {currentPage,totalPages,goToPage,currentItems} = usePagination(movies ?? []);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!movies?.length) return <div>No movies found</div>;
    return (
        <div className={'genres-page-wrapper'}>
            <MoviesList movies={currentItems} />
            <Pagination  goToPage={goToPage} totalPages={totalPages} currentPage={currentPage} />
        </div>
    );
};