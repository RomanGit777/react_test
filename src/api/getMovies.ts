import axios from "axios"
import type {IMovie} from "../models/IMovie.ts";
import type {IMoviesResponse} from "../models/IMoviesResponse.ts";
import type {IGenres} from "../models/IGenres.ts";

export const getMovies = async (): Promise<IMovie[]> => {
    const {data} = await axios.get<IMoviesResponse>
    (`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
    return data.results
}
export const getMovieById = async (id: string): Promise<IMovie> => {
    const {data} = await axios.get
    (`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
    return data
}
export const getGenres = async (): Promise<IGenres[]> => {
    const {data} = await axios.get
    (`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
    return data
}