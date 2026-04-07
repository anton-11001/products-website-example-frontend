import { useState, useEffect } from "react";
import { fetchProducts } from "../api/fetchProducts";
import { searchProducts } from "../api/searchProducts";
import type { Product } from "../types/product";
import { PAGINATION } from "../constants/pagination";
import { LIMIT } from "../constants/api";
import { SEARCH_DEBOUNCE_MS } from "../constants/search";
import { getErrorMessage } from "../utils/getErrorMessage";
import { useDebounce } from "./useDebounce";

const DEFAULT_ERROR_MESSAGE = "Failed to load products.";

interface UseProductsProps {
  currentPage: number;
  searchQuery: string;
}

export const useProducts = ({ currentPage, searchQuery }: UseProductsProps) => {
  const debouncedSearchQuery = useDebounce(searchQuery, SEARCH_DEBOUNCE_MS);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const totalPages = Math.ceil(totalProducts / LIMIT);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const skip = (currentPage - PAGINATION.INITIAL_PAGE) * LIMIT;

        const response = debouncedSearchQuery.trim()
          ? await searchProducts(debouncedSearchQuery.trim(), skip)
          : await fetchProducts(skip);

        setProducts(response.products);
        setTotalProducts(response.total);
      } catch (err) {
        setError(getErrorMessage(err, DEFAULT_ERROR_MESSAGE));
        setProducts([]);
        setTotalProducts(0);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [currentPage, debouncedSearchQuery]);

  return {
    products,
    isLoading,
    totalPages,
    error,
  };
};
