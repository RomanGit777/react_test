import './SearchPage.css'
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMoviesBySearch} from "../../api/getMovies.ts";
import type {IMovieSearch} from "../../models/IMovieSearch.ts";
import {usePagination} from "../../hooks/UsePagination.tsx";
import {Pagination} from "../../components/Pagination/Pagination.tsx";
import {SearchMovieList} from "../../components/SearchMovieList/SearchMovieList.tsx";

export const SearchPage = () => {
   const [params, setSearchParams] = useSearchParams();
   const query = params.get("query") ?? "";

    const [movies, setMovies] = useState<IMovieSearch[]>([]);
    const {currentPage,totalPages, currentItems} = usePagination(movies);

    const goToPage = (page: number) => {
        const currentParams = Object.fromEntries(params.entries());
        setSearchParams({ ...currentParams, page: String(page) });
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    useEffect(() => {
        if(!query.trim()) {
            setMovies([]);
            return;
        }
        getMoviesBySearch(query)
            .then(setMovies)
    }, [query])
    return (
    <div className={'search-page-wrapper'}>
            <SearchMovieList movies={currentItems} />
            <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
    </div>
        )};
