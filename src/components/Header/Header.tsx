import './Header.css'
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
        <div className={'header'}>
            <h2>Logo</h2>
            <nav className={'nav'}>
                <button className={'home-page-btn'} onClick={() => navigate('/')}>Home Page</button>
                    <div className={'genres-wrapper'}
                         onMouseEnter={() => setShowGenres(true)}
                         onMouseLeave={() => setShowGenres(false)}
                    >
                        <button>Genres</button>
                        {showGenres && (
                            <ul className={'genres-container'}>
                                {genres.map(g => (
                                    <li className={'genres-list'} key={g.id} onClick={() => navigate(`/genres/${g.id}`)}>
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