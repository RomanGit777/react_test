import './MoviesListCard.css'
export const MoviesListCard = () => {
    return (
        <div className={'movies-cards-wrapper'}>
            <div className="film-section1">
                <h2>The Best Film</h2>
                <div className="carousel">
                    <button className="arrow left">&#8592;</button>
                        <div className="grid-container">
                            <div className="grid">
                                <div className="film">Bumbelbee</div>
                                <div className="film">Bumbelbee</div>
                                <div className="film">Bumbelbee</div>
                                <div className="film">Bumbelbee</div>
                            </div>
                     </div>
                    <button className="arrow right">&#8594;</button>
                </div>
            </div>

            <div className="film-section2">
                <h2>The Best Film</h2>
                <div className="carousel">
                    <button className="arrow left">&#8592;</button>
                        <div className="grid-container">
                            <div className="grid">
                                <div className="film">Bumbelbee</div>
                                <div className="film">Bumbelbee</div>
                                <div className="film">Bumbelbee</div>
                                <div className="film">Bumbelbee</div>
                            </div>
                        </div>
                    <button className="arrow right">&#8594;</button>
                </div>
            </div>

        </div>
    );
};