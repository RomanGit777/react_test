import './SearchPage.css'
import {useSearchParams} from "react-router-dom";
import {usePagination} from "../../hooks/UsePagination.tsx";
import {Pagination} from "../../components/Pagination/Pagination.tsx";
import {SearchMovieList} from "../../components/SearchMovieList/SearchMovieList.tsx";
import {useMoviesBySearch} from "../../queries/useMoviesBySearch.ts";

export const SearchPage = () => {
   const [params, setSearchParams] = useSearchParams();
   const query = params.get("query") ?? "";

   const {data: movies, isLoading, error} = useMoviesBySearch(query);
    const {currentPage,totalPages, currentItems} = usePagination(movies || []);

    if(error) return <div>Error: {error.message}</div>
    if(isLoading) return <div>Loading...</div>

    const goToPage = (page: number) => {
        const currentParams = Object.fromEntries(params.entries());
        setSearchParams({ ...currentParams, page: String(page) });
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return (
    <div className={'search-page-wrapper'}>
            <SearchMovieList movies={currentItems} />
            <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
    </div>
        )};
