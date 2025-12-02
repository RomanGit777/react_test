import './MovieCard.css'

export const MovieCard = () => {
    return (
        <div className={'movie-card-wrapper'}>
            <div className={'carousel'}>
                <div className={'grid'}>
                    <div className={'card'}></div>
                    <div className={'card'}></div>
                    <div className={'card'}></div>
                    <div className={'card'}></div>
                </div>
            </div>
        </div>
    );
};