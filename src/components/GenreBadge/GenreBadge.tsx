import {Badge} from "reactstrap";

interface GenreBadgeProps {
    label: string;
    id: number;
    className?: string;
}

export const GenreBadge = ({label, id, className}: GenreBadgeProps) => {
    return (
        <Badge key={id} color='info' className={className}>
            {label}
        </Badge>
    );
};