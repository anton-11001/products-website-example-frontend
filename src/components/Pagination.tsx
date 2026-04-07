import { PAGINATION } from "../constants/pagination";
import { PaginationPages } from "./PaginationPages";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  if (totalPages < PAGINATION.MIN_TOTAL_PAGES_TO_SHOW) {
    return null;
  }

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={handlePrevious}
        disabled={currentPage === PAGINATION.INITIAL_PAGE}
        aria-label="Previous page"
      >
        Previous
      </button>
      <PaginationPages
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      <button
        className="pagination-button"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  );
}
