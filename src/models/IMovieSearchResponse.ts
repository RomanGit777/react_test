import type {IMovieSearch} from "./IMovieSearch.ts";

export interface IMovieSearchResponse {
    page: number,
    "results": IMovieSearch[],
    total_pages: number,
    total_results: number
}