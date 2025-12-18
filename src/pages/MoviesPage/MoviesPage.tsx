import './MoviesPage.css'
import {MoviesList} from "../../components/MoviesList/MoviesList.tsx";
import {usePagination} from "../../hooks/UsePagination.tsx";
import {Pagination} from "../../components/Pagination/Pagination.tsx";
import {useMovies} from "../../queries/useMovies.ts";

export const MoviesPage = () => {
   const {data: movies, isLoading, error} = useMovies(page);
    const {currentPage,totalPages,goToPage,currentItems} = usePagination(movies);

    if (isLoading) return <div>Loading movies...</div>;
    if (error) return <div>Error fetching movies</div>;
    if (!movies?.length) return <div>No movies found</div>;

    return (
        <div className={'movies-page-container'} id={'movies-page-container'}>
            <MoviesList movies={currentItems} />
            <Pagination  goToPage={goToPage} totalPages={totalPages} currentPage={currentPage} />
        </div>
    );
};
