import './MoviesPage.css'
import {MoviesList} from "../../components/MoviesList/MoviesList.tsx";
import {usePagination} from "../../hooks/UsePagination.tsx";
import {Pagination} from "../../components/Pagination/Pagination.tsx";
import {useMovies} from "../../queries/useMovies.ts";
import {useSearchParams} from "react-router-dom";

export const MoviesPage = () => {
    const [searchParams] = useSearchParams();
    const currentPage = Number(searchParams.get("page")|| 1);
   const {data: movies, isLoading, error} = useMovies(currentPage);
    const pagination = usePagination(movies || []);


    if (isLoading) return <div>Loading movies...</div>;
    if (error) return <div>Error fetching movies</div>;
    if (!movies?.length) return <div>No movies found</div>;

    return (
        <div className={'movies-page-container'} id={'movies-page-container'}>
            <MoviesList movies={pagination.currentItems} />
            <Pagination  goToPage={pagination.goToPage}
                         totalPages={pagination.totalPages}
                         currentPage={pagination.currentPage} />
        </div>
    );
};
