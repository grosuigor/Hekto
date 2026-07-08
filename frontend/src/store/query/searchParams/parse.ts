import type {
  Filter,
  ListedProduct,
  Query,
  Sorting,
} from "@/types";

import { createDefaultQuery } from "./defaults";

const VALID_SORT_KEYS = new Set<Sorting['key']>(["price", "rating"]);
const VALID_ORDERS = new Set<Sorting['order']>(["ascending", "descending"]);

function parsePositiveInt(value: string, fallback: number): number {
  const parsed = Number(value);

  if (!Number.isInteger(parsed) || parsed < 1) {
    return fallback;
  }

  return parsed;
}

export function parseSearchParams(
  params: URLSearchParams,
): Query {
  const defaults = createDefaultQuery();
  const sorting = { ...defaults.sorting };
  const pagination = { ...defaults.pagination };
  const filters: Filter[] = [];

  const rangeFiltersLookup = new Map<
    Filter["name"],
    Filter
  >();

  for (const [key, value] of params.entries()) {
    switch (key) {
      case "sort": {
        if (VALID_SORT_KEYS.has(value as Sorting['key'])) {
          sorting.key = value as Sorting['key'];
        }
        continue;
      }
      case "order": {
        if (VALID_ORDERS.has(value as Sorting['order'])) {
          sorting.order = value as Sorting['order'];
        }
        continue;
      }
      case "page": {
        pagination.page = parsePositiveInt(value, defaults.pagination.page);
        continue;
      }
      case "count": {
        pagination.count = parsePositiveInt(value, defaults.pagination.count);
        continue;
      }
    }

    if (!key.startsWith("filter__")) {
      continue;
    }

    const [, name, intervalType] = key.split("__") as [
      never,
      keyof ListedProduct,
      "min" | "max" | undefined,
    ];

    if (intervalType === undefined) {
      filters.push({
        name,
        label: "",
        type: "multi-select",
        values: value.split(",").filter(Boolean),
      });
      continue;
    }

    const existing = rangeFiltersLookup.get(name);

    if (existing) {
      rangeFiltersLookup.set(name, {
        ...existing,
        values: {
          ...existing.values,
          [intervalType]: Number(value),
        },
      } as Filter);
      continue;
    }

    rangeFiltersLookup.set(name, {
      name,
      label: "",
      type: "range",
      values: {
        [intervalType]: Number(value),
        [intervalType === "min" ? "max" : "min"]: 0,
      },
    } as Filter);
  }

  filters.push(...rangeFiltersLookup.values());

  return { sorting, pagination, filters };
}
