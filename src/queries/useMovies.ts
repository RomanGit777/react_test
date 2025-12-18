import {useQuery} from "@tanstack/react-query";
import {getMovies} from "../api/getMovies.ts";
import type {IMovie} from "../models/IMovie.ts";

export const useMovies = (page: number = 1) => {
    return useQuery<IMovie[], Error>({
        queryKey: ['movies', page],
        queryFn: () => getMovies(page),
        staleTime : 5 * 60 * 1000
    })
}