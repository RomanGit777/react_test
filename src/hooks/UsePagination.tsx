import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function usePagination<T>(items: T[], itemsPerPage: number = 6) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(
        Number(searchParams.get("page") || 1)
    );

    const totalPages = Math.ceil(items.length / itemsPerPage);
    const firstIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = items.slice(firstIndex, firstIndex + itemsPerPage);

    useEffect(() => {
        const page = Number(searchParams.get("page") || 1);
        setCurrentPage(page);
    }, [searchParams]);

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setSearchParams({ page: String(page) });
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return { currentPage, totalPages, currentItems, goToPage };
}
