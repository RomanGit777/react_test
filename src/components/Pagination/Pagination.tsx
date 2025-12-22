import stylesPagination from './Pagination.module.css'
import React from "react";

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    goToPage: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({currentPage, totalPages, goToPage }) => {
    if (currentPage < 1) return null;
    return (
            <div className={stylesPagination.pagination}>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            type={"button"}
                            key={page}
                            onClick={() => goToPage(page)}
                            className={page === currentPage ? stylesPagination.pageButtonActive : stylesPagination.pageButton}
                        >
                            {page}
                        </button>
                    ))}

            </div>
    );
};