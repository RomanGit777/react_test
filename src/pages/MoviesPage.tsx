import './MoviesPage.css'
import { useState, useEffect } from "react";
import type { IMovie } from "../models/IMovie";
import { MoviesList } from "../components/MoviesList/MoviesList.tsx";
import { getMovies } from "../api/getMovies.ts";

export const MoviesPage = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 6;

    useEffect(() => {
        getMovies()
            .then((data) => setMovies(data))
            .catch((err) => console.log("Failed to load movies", err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading...</div>;
    if (!movies.length) return <div>No movies found</div>;

    // Pagination logic
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
    const totalPages = Math.ceil(movies.length / moviesPerPage);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);

            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };


    return (
        <div className={'movies-page-container'}>
            <MoviesList movies={currentMovies} />

            <div
                className="pagination"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "8px",
                    marginTop: "20px",
                }}
            >

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => goToPage(page)}
                        style={{
                            fontWeight: page === currentPage ? "bold" : "normal",
                            backgroundColor: page === currentPage ? "#ff4500" : "#111",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            padding: "6px 12px",
                            cursor: "pointer",
                        }}
                    >
                        {page}
                    </button>
                ))}

            </div>
        </div>
    );
};
