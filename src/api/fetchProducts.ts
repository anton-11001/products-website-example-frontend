import type { ProductsResponse } from "../types/product";
import { API_BASE_URL, LIMIT } from "../constants/api";

export async function fetchProducts(skip: number): Promise<ProductsResponse> {
  const response = await fetch(
    `${API_BASE_URL}/products?limit=${LIMIT}&skip=${skip}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}
