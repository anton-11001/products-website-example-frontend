import type { PAGINATION_LAYOUT_STATES } from "../constants/pagination";

export type PaginationLayoutState =
  (typeof PAGINATION_LAYOUT_STATES)[keyof typeof PAGINATION_LAYOUT_STATES];

export type PageBuilder = (currentPage: number, totalPages: number) => number[];
