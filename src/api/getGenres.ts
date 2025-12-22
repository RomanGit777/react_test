import type {IGenresResponse} from "../models/IGenresResponse.ts";
import axios from "axios";

export const getGenres = async (): Promise<IGenresResponse> => {
    const {data} = await axios.get
    (`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
    return data
}