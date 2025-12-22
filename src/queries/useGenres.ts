import {useQuery} from "@tanstack/react-query";
import type {IGenres} from "../models/IGenres.ts";
import { getGenres } from "../api/getGenres.ts";

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