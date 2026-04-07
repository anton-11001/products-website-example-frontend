import { PAGINATION, PAGINATION_LAYOUT_STATES } from "../constants/pagination";
import type { PaginationLayoutState, PageBuilder } from "../types/pagination";

const getPaginationLayoutState = (
  currentPage: number,
  totalPages: number,
): PaginationLayoutState => {
  if (totalPages <= PAGINATION.MAX_VISIBLE_PAGES) {
    return PAGINATION_LAYOUT_STATES.ALL_VISIBLE;
  }

  if (currentPage <= PAGINATION.NEAR_START_THRESHOLD) {
    return PAGINATION_LAYOUT_STATES.AT_START;
  }

  if (currentPage >= totalPages - PAGINATION.NEAR_END_THRESHOLD) {
    return PAGINATION_LAYOUT_STATES.AT_END;
  }

  return PAGINATION_LAYOUT_STATES.IN_MIDDLE;
};

const buildAllVisiblePages: PageBuilder = (_currentPage, totalPages) => {
  return Array.from({ length: totalPages }, (_, i) => i + 1);
};

const buildAtStartPages: PageBuilder = (_currentPage, totalPages) => {
  const startPages = Array.from(
    { length: PAGINATION.PAGES_AT_START },
    (_, i) => i + 1,
  );

  return [...startPages, PAGINATION.ELLIPSIS_NUMBER, totalPages];
};

const buildAtEndPages: PageBuilder = (_currentPage, totalPages) => {
  const firstVisible = totalPages - PAGINATION.PAGES_AT_END + 1;

  const endPages = Array.from(
    { length: PAGINATION.PAGES_AT_END },
    (_, i) => firstVisible + i,
  );

  return [1, PAGINATION.ELLIPSIS_NUMBER, ...endPages];
};

const buildInMiddlePages: PageBuilder = (currentPage, totalPages) => {
  const from = currentPage - PAGINATION.MIDDLE_WINDOW_RADIUS;
  const to = currentPage + PAGINATION.MIDDLE_WINDOW_RADIUS;

  const middlePages = Array.from({ length: to - from + 1 }, (_, i) => from + i);

  return [
    1,
    PAGINATION.ELLIPSIS_NUMBER,
    ...middlePages,
    PAGINATION.ELLIPSIS_NUMBER,
    totalPages,
  ];
};

const PAGE_BUILDERS: Record<PaginationLayoutState, PageBuilder> = {
  ALL_VISIBLE: buildAllVisiblePages,
  AT_START: buildAtStartPages,
  AT_END: buildAtEndPages,
  IN_MIDDLE: buildInMiddlePages,
};

export const getPageNumbers = (
  currentPage: number,
  totalPages: number,
): number[] => {
  const state = getPaginationLayoutState(currentPage, totalPages);
  return PAGE_BUILDERS[state](currentPage, totalPages);
};
