import { PAGINATION, ELLIPSIS } from "../constants/pagination";
import { getPageNumbers } from "../utils/pagination";

interface PaginationPagesProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function PaginationPages({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationPagesProps) {
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div className="pagination-pages">
      {pageNumbers.map((page, index) => {
        if (page === PAGINATION.ELLIPSIS_NUMBER) {
          return (
            <span
              key={`ellipsis-${index}`}
              className="pagination-ellipsis"
              aria-hidden
            >
              {ELLIPSIS}
            </span>
          );
        }

        return (
          <button
            key={page}
            className={`pagination-page ${currentPage === page ? "active" : ""}`}
            onClick={() => onPageChange(page)}
            aria-label={`Go to page ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
