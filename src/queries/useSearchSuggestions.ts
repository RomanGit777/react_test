import {useQuery} from "@tanstack/react-query";
import type {IMovieSearch} from "../models/IMovieSearch.ts";
import {getMoviesBySearch} from "../api/getMovies.ts";

export const useSearchSuggestions = (query: string | undefined, limit: number = 5) => {
    return useQuery<IMovieSearch[], Error>({
        queryKey: ['search-suggestions', query],
        enabled: !!query?.trim(),
        queryFn: async () => {
        const movies =  await getMoviesBySearch(query!);
            return movies.slice(0, limit);
        },
        staleTime: 15 * 60 * 1000
    })
}