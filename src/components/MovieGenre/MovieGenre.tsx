import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {IGenres} from "../../models/IGenres.ts";

export const MovieGenre = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState<IGenres>()
    useEffect(() => {
        if (id) setMovie(movie);
    })
    return (
        <>fddffdfdfdfd</>
    );
};