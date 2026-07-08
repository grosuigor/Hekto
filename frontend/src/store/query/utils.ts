import type { Filter, Query } from "@/types";

import type { QueryStoreState } from "./context";
import { createDefaultQuery, parseSearchParams } from "./searchParams";

export function cloneFilters(
  filters: Filter[],
): Filter[] {
  return filters.map((filter) =>
    filter.type === "multi-select"
      ? { ...filter, values: [...filter.values] }
      : { ...filter, values: { ...filter.values } },
  );
}

export function toAppliedQuery(state: QueryStoreState): Query {
  return {
    sorting: state.sorting,
    pagination: state.pagination,
    filters: state.filters,
  };
}

export function areAppliedQueriesEqual(
  a: Query,
  b: Query,
): boolean {
  return (
    a.sorting.key === b.sorting.key &&
    a.sorting.order === b.sorting.order &&
    a.pagination.page === b.pagination.page &&
    a.pagination.count === b.pagination.count &&
    JSON.stringify(a.filters) === JSON.stringify(b.filters)
  );
}

export function createQueryStateFromParams(
  params: URLSearchParams,
): QueryStoreState {
  const query = parseSearchParams(params);

  return {
    ...query,
    draftFilters: cloneFilters(query.filters),
  };
}

export function createDefaultQueryState(): QueryStoreState {
  const query = createDefaultQuery();

  return {
    ...query,
    draftFilters: [],
  };
}
