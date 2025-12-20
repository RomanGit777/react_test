import './SearchPage.css'
import {useSearchParams} from "react-router-dom";
import {usePagination} from "../../hooks/UsePagination.tsx";
import {Pagination} from "../../components/Pagination/Pagination.tsx";
import {SearchMovieList} from "../../components/SearchMovieList/SearchMovieList.tsx";
import {useMoviesBySearch} from "../../queries/useMoviesBySearch.ts";

export const SearchPage = () => {
   const [params] = useSearchParams();
   const query = params.get("query") ?? "";
   const currentPage = params.get("page") ?? 1;

   const {data: movies, isLoading, error} = useMoviesBySearch(query, Number(currentPage));
    const pagination = usePagination(movies || []);

    if(error) return <div>Error: {error.message}</div>
    if(isLoading) return <div>Loading...</div>

    return (
    <div className={'search-page-wrapper'}>
            <SearchMovieList movies={pagination.currentItems} />
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} goToPage={pagination.goToPage} />
    </div>
        )};
