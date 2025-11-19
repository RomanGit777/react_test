import type {ISearchMovieResults} from "./ISearchMovieResults.ts";

export interface ISearchMovieBaseResponse {
	page: number;
	total_pages: number;
	results: ISearchMovieResults[];
	total_results: number;
}



