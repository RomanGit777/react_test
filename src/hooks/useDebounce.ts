import {useEffect, useState} from "react";
export const useDebounce = (text: string, ms: number) => {

    const [debouncedValue, setDebouncedValue] = useState(text);
        useEffect( () => {
           const timer = setTimeout(() => setDebouncedValue(text), ms);
        return () => clearTimeout(timer);
        },[text, ms])
    return  debouncedValue;
}