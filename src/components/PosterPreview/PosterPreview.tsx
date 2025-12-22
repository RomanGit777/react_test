export interface PosterPreviewProps {
    title: string;
    posterPath: string;
    className?: string;
}

export const PosterPreview = ({posterPath, className, title}: PosterPreviewProps) => {
    const posterUrl = posterPath
        ? `https://image.tmdb.org/t/p/w500${posterPath}`
        : "/icons/bg.svg";

    return <img className={className} src={posterUrl} alt={title} />
};