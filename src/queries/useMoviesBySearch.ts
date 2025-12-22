import {useQuery} from "@tanstack/react-query";
import type {IMovieSearch} from "../models/IMovieSearch.ts";
import {getMoviesBySearch} from "../api/getMovies.ts";

export const useMoviesBySearch = (query: string | undefined, page: number = 1) => {
    return useQuery<IMovieSearch[], Error>({
        queryKey: ['search', query, page],
        queryFn: () => {
            if (!query) throw new Error("Missing search query");
            return getMoviesBySearch(query, page);
        },
        staleTime: 15 * 60 * 1000,
        retry: false,
        enabled: !!query
    })
}