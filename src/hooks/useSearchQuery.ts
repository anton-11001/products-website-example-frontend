import { useState } from "react";

interface UseSearchQueryProps {
  moveToInitialPage: () => void;
}

export const useSearchQuery = ({ moveToInitialPage }: UseSearchQueryProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    moveToInitialPage();
  };

  return {
    searchQuery,
    handleSearchChange,
  };
};
