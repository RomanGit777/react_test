import searchBarStyles from './SearchBar.module.css'
import {useEffect, useRef, useState} from "react";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import type {IMovieSearch} from "../../models/IMovieSearch.ts";
import {getMoviesBySearch} from "../../api/getMovies.ts";

export const SearchBar = () => {
    const [text, setText] = useState("");
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const query = params.get('query') ?? "";
    const [suggestions, setSuggestions] = useState<IMovieSearch[]>([]);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        setSuggestions([]);
    }, [location.pathname]);
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setSuggestions([]); // CLOSE ONLY DROPDOWN
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    useEffect(() => {
        if (!query) {
            setText("");
        } else if (query) {
            setText(query);
        }
    }, [query]);

    useEffect(() => {
        if(!text.trim()){
            setSuggestions([]);
            return;
        }
        const timeout = setTimeout(async () => {
            const data = await getMoviesBySearch(text);
            setSuggestions(data.slice(0,6));
        }, 300);
        return () => clearTimeout(timeout);
    }, [text]);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSuggestions([]);
        navigate(`/search?query=${encodeURIComponent(text)}`);
        setDropdownOpen(false);
    }
    const handleSelect = (movieId: number) => {
        setText("");
        setSuggestions([]);
        navigate(`/movie/${movieId}`);
        setDropdownOpen(false);
    };

    return (
        <div ref={wrapperRef} className={searchBarStyles.searchWrapper} id={'searchWrapper'}>
            <form  onSubmit={handleSubmit} >
                <input
                    placeholder={'Search'}
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                        setDropdownOpen(true);
                    }}
                />
                {dropdownOpen && suggestions.length > 0 &&
                    <ul className={searchBarStyles.searchDropdown} id={'searchDropdown'}>
                        {suggestions.map((movie) => (
                                <li
                                    key={movie.id}
                                    className={searchBarStyles.searchItem}
                                    onClick={() => handleSelect(movie.id)}
                                >
                                   <p className={searchBarStyles.title}>{movie.title}</p> <p>({movie.original_title} {movie.release_date})</p>
                                    <p
                                        className={searchBarStyles.searchRating}
                                        style={{backgroundColor: movie.vote_average >= 7 ? "green" : "grey" }}
                                    >{movie.vote_average.toFixed()}</p>
                                </li>
                            ))}
                    </ul>
                }

                <button type="submit">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_4_48)">
                            <path d="M7.96163 7.95383L6.29122 6.28718M6.29122 6.28718C6.57695 6.00209 6.8036 5.66365 6.95824 5.29116C7.11288 4.91868 7.19247 4.51945 7.19247 4.11628C7.19247 3.7131 7.11288 3.31388 6.95824 2.94139C6.80361 2.56891 6.57695 2.23046 6.29122 1.94538C6.00549 1.66029 5.66628 1.43414 5.29296 1.27986C4.91964 1.12557 4.51951 1.04616 4.11543 1.04616C3.71135 1.04616 3.31122 1.12557 2.9379 1.27986C2.56457 1.43414 2.22536 1.66029 1.93963 1.94538C1.36258 2.52113 1.03839 3.30203 1.03839 4.11628C1.03839 4.93052 1.36258 5.71142 1.93963 6.28718C2.51669 6.86294 3.29935 7.1864 4.11543 7.1864C4.93151 7.1864 5.71417 6.86294 6.29122 6.28718Z" stroke="#AAB3C0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_4_48">
                                <rect width="9" height="9" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </form>
        </div>
    );
};