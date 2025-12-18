import {useQuery} from "@tanstack/react-query";
import {getGenres} from "../api/getMovies.ts";
import type {IGenres} from "../models/IGenres.ts";

export const useGenres = () => {
    return useQuery<IGenres[], Error>({
        queryKey: ['genres'],
        queryFn: async () => {
            const res = await getGenres();
            return res.genres
        },
        staleTime: 1000 * 60 * 60,
    });
}