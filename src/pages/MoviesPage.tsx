import './MoviesPage.css'
import {MoviesList} from "../components/MoviesList/MoviesList.tsx";

export const MoviesPage = () => {
    return (
        <div className={'movies-page-container'}>
            <div className={'movie-info-container'}>
                <h2>Title</h2>
                <span className={'stars-rating'}><svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.05423 0L3.77524 2.21902H6.10846L4.22084 3.59045L4.94185 5.80948L3.05423 4.43804L1.16662 5.80948L1.88762 3.59045L1.14441e-05 2.21902H2.33323L3.05423 0Z" fill="#E5E748"/>
</svg> 4,5</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deleniti dignissimos eaque inventore magni nulla, quod rem repudiandae tempora veritatis! Consequatur dolores eum eveniet fugit nemo, perspiciatis rerum sapiente sed?</p>
                <button>See more</button>
            </div>
            <MoviesList/>
        </div>
    );
};