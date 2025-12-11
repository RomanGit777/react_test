import { useSearchParams } from "react-router-dom";

export function usePagination<T>(items: T[], itemsPerPage: number = 6) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = Number(searchParams.get("page") || 1);


    const totalPages = Math.ceil(items.length / itemsPerPage);
    const firstIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = items.slice(firstIndex, firstIndex + itemsPerPage);

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        const currentParams = Object.fromEntries(searchParams.entries());
        setSearchParams({ ...currentParams, page: String(page) });
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return { currentPage, totalPages, currentItems, goToPage };
}
