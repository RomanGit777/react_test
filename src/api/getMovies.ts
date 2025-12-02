import axios from "axios"
import type {IMovie} from "../models/IMovie.ts";
import type {IMoviesResponse} from "../models/IMoviesResponse.ts";

export const getMovies = async (): Promise<IMovie[]> => {
    const {data} = await axios.get<IMoviesResponse>
    (`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
    return data.results
}