import type { ProductsResponse } from "../types/product";
import { API_BASE_URL, LIMIT } from "../constants/api";

export async function searchProducts(
  query: string,
  skip: number,
): Promise<ProductsResponse> {
  const response = await fetch(
    `${API_BASE_URL}/products/search?q=${encodeURIComponent(query)}&limit=${LIMIT}&skip=${skip}`,
  );

  if (!response.ok) {
    throw new Error("Failed to search products");
  }

  return response.json();
}
