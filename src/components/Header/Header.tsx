import headerStyles from './Header.module.css';
import {UserInfo} from "../UserInfo/UserInfo.tsx";
import {useEffect, useState} from "react";
import {getGenres} from "../../api/getMovies.ts";
import type {IGenres} from "../../models/IGenres.ts";
import {useNavigate} from "react-router-dom";
import {SearchBar} from "../SearchBar/SearchBar.tsx";
export const Header = () => {
    const [showGenres, setShowGenres] = useState(false)
    const [genres, setGenres] = useState<IGenres[]>([])
    useEffect(() => {
        getGenres().then(res => setGenres(res.genres))
    }, []);
    const navigate = useNavigate();

    return (
        <div className={headerStyles.header} id={'header'}>
            <h2>Logo</h2>
            <nav className={headerStyles.nav}>
                <button  id={'homePageBtn'} className={headerStyles.homePageBtn} onClick={() => navigate('/')}>Home Page</button>
                    <div className={headerStyles.genresWrapper} id={'genresWrapper'}
                         onMouseEnter={() => setShowGenres(true)}
                         onMouseLeave={() => setShowGenres(false)}
                    >
                        <button id={'genresBtn'}>Genres</button>
                        {showGenres && (
                            <ul className={headerStyles.genresContainer} id={'genresContainer'}>
                                {genres.map(g => (
                                    <li className={headerStyles.genresList} key={g.id} onClick={() => navigate(`/genres/${g.id}`)}>
                                        {g.name}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                        <SearchBar/>
            </nav>
            <UserInfo/>
        </div>
    );
};