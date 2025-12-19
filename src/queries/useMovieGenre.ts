import {useQuery} from "@tanstack/react-query";
import type {IMovie} from "../models/IMovie.ts";
import {getMoviesByGenre} from "../api/getMovies.ts";

export const useMovieGenre = (genre_ids: string | undefined) => {
    return useQuery<IMovie[], Error>({
        queryKey: ["genre", genre_ids],
        queryFn: () => getMoviesByGenre(genre_ids!),
        staleTime: 1000 * 60 * 30,
        enabled: !!genre_ids
    })
}