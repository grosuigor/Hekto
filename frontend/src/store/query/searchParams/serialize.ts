import type { Query } from "@/types";
import { DEFAULT_QUERY } from "./defaults";

export function serializeToSearchParams(
  query: Query,
): URLSearchParams {
  const params = new URLSearchParams();

  if (query.sorting.key !== DEFAULT_QUERY.sorting.key) {
    params.set("sort", query.sorting.key);
  }
  if (query.sorting.order !== DEFAULT_QUERY.sorting.order) {
    params.set("order", query.sorting.order);
  }
  if (query.pagination.page !== DEFAULT_QUERY.pagination.page) {
    params.set("page", String(query.pagination.page));
  }
  if (query.pagination.count !== DEFAULT_QUERY.pagination.count) {
    params.set("count", String(query.pagination.count));
  }

  for (const filter of query.filters) {
    if (filter.type === "multi-select") {
      if (filter.values.length > 0) {
        params.set(`filter__${filter.name}`, filter.values.join(","));
      }
    } else {
      if (filter.values.min > 0) {
        params.set(`filter__${filter.name}__min`, String(filter.values.min));
      }
      if (filter.values.max > 0) {
        params.set(`filter__${filter.name}__max`, String(filter.values.max));
      }
    }
  }

  return params;
}
