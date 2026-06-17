import type { Query } from "@/types";

export function createDefaultQuery(): Query {
  return {
    sorting: {
      key: "price",
      order: "descending",
    },
    pagination: {
      page: 1,
      count: 10,
    },
    filters: [],
  };
}

export const DEFAULT_QUERY = createDefaultQuery();
