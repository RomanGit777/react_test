import {useQuery} from "@tanstack/react-query";
import type {IMovieSearch} from "../models/IMovieSearch.ts";

export const useMoviesBySearch = (query: string | undefined, page: number = 1) => {
    return useQuery<IMovieSearch[], Error>({
        queryKey: ['query', page],
    })
}