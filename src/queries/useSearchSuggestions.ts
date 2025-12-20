import {useQuery} from "@tanstack/react-query";
import type {IMovieSearch} from "../models/IMovieSearch.ts";
import {getMoviesBySearch} from "../api/getMovies.ts";

export const useSearchSuggestions = (query: string | undefined) => {
    return useQuery<IMovieSearch[], Error>({
        queryKey: ['search-suggestions', query],
        queryFn: () => getMoviesBySearch(query!),
        staleTime: 15 * 60 * 1000,
        enabled: !!query
    })
}