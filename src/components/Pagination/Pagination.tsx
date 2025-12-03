import React from "react";

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    goToPage: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({currentPage, totalPages, goToPage }) => {
    if (currentPage < 1) return null;
    return (
        <>
            <div
                className="pagination"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "8px",
                    marginTop: "20px",
                }}
                >

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => goToPage(page)}
                            style={{
                                fontWeight: page === currentPage ? "bold" : "normal",
                                backgroundColor: page === currentPage ? "#ff4500" : "#111",
                                color: "#fff",
                                border: "none",
                                borderRadius: "6px",
                                padding: "6px 12px",
                                cursor: "pointer",
                            }}
                        >
                            {page}
                        </button>
                    ))}

            </div>
        </>

    );
};