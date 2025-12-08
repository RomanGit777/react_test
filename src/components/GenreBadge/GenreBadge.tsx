import {Badge} from "reactstrap";

interface GenreBadgeProps {
    label: string;
    id: number;
    className?: string;
    onClick?: () => void;
}

export const GenreBadge = ({label, id, className, onClick}: GenreBadgeProps) => {
    return (
        <Badge key={id} color='info' className={className} onClick={onClick}>
            {label}
        </Badge>
    );
};