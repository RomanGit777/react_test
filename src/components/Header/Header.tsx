import headerStyles from './Header.module.css';
import {UserInfo} from "../UserInfo/UserInfo.tsx";
import {useNavigate} from "react-router-dom";
import {SearchBar} from "../SearchBar/SearchBar.tsx";
import {GenresDropdown} from "../GenresDropdown/GenresDropdown.tsx";

export const Header = () => {

    const navigate = useNavigate();

    return (
        <div className={headerStyles.header} id={'header'}>
            <h2>Logo</h2>
            <nav className={headerStyles.nav}>
                <button  id={'homePageBtn'} className={headerStyles.homePageBtn} onClick={() => navigate('/')}>Home Page</button>
                   <GenresDropdown/>
                        <SearchBar/>
            </nav>
            <UserInfo/>
        </div>
    );
};