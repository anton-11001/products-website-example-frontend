import { useState } from "react";
import { PAGINATION } from "../constants/pagination";

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState<number>(
    PAGINATION.INITIAL_PAGE,
  );

  const moveToInitialPage = () => {
    setCurrentPage(PAGINATION.INITIAL_PAGE);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    currentPage,
    moveToInitialPage,
    handlePageChange,
  };
};
