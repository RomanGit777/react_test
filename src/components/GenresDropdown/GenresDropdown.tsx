import genresDropdownStyles from "../GenresDropdown/GenresDropdown.module.css";
import {useState} from "react";
import {useGenres} from "../../queries/useGenres.ts";
import {useNavigate} from "react-router-dom";

export const GenresDropdown = () => {

    const [showGenres, setShowGenres] = useState(false)
    const {data: genres = [], isLoading, isError } = useGenres();
    const navigate = useNavigate();

    if (isError) return null;

        return (<div className={genresDropdownStyles.genresWrapper} id={'genresWrapper'}
                        onMouseEnter={() => setShowGenres(true)}
                        onMouseLeave={() => setShowGenres(false)}
                >
                    <button id={'genresBtn'}>Genres</button>
                    {showGenres && (
                        <ul className={genresDropdownStyles.genresContainer} id={'genresContainer'}>
                            {isLoading ? (
                                <li>Loading...</li>
                            ) : (
                                genres.map(g => (
                                    <li className={genresDropdownStyles.genresList} key={g.id}
                                        onClick={() => { navigate(`/genres/${g.id}`); setShowGenres(false);}}>
                                        {g.name}</li>
                                ))
                            )}
                        </ul>
                    )}
                </div>
            );
};