import {useQuery} from "@tanstack/react-query";
import type {IMovie} from "../models/IMovie.ts";
import {getMovieById} from "../api/getMovies.ts";

export const useMovieById = (id: string | undefined) => {
    return useQuery<IMovie, Error>({
        queryKey: ['movieById', id],
        queryFn: () => getMovieById(id!),
        staleTime: 1000 * 60 * 10,
        enabled: !!id
    })
}