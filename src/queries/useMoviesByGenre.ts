import {useQuery} from "@tanstack/react-query";
import type {IMovie} from "../models/IMovie.ts";
import {getMoviesByGenre} from "../api/getMovies.ts";

export const useMoviesByGenre = (genre_ids: string | undefined) => {
    return useQuery<IMovie[], Error>({
        queryKey: ["genre", genre_ids],
        queryFn: () => {
            if (!genre_ids) throw "Missing genre id";
            return getMoviesByGenre(genre_ids);
        },
        staleTime: 1000 * 60 * 30,
        retry: false,
        enabled: !!genre_ids
    })
}