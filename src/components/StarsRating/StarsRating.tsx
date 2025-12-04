export interface StarsRatingProps {
    rating: number;
    className?: string;
}

export const StarsRating = ({rating, className}: StarsRatingProps) => {
    return (
        <span className={className}>
            <svg width="5" height="5" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.05423 0L3.77524 2.21902H6.10846L4.22084 3.59045L4.94185 5.80948L3.05423 4.43804L1.16662 5.80948L1.88762 3.59045L1.14441e-05 2.21902H2.33323L3.05423 0Z" fill="#E5E748"/>
</svg>
            <span>{rating}</span>
        </span>
    );
};