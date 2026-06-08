import { NextRequest } from "next/server";

import { ProductModel } from "@/storage/models";
import type { Filter, Product } from "@/types";

export function parseUrlParams(
  request: NextRequest,
): Parameters<ProductModel["list"]> {
  const [filters, sorting, pagination]: Parameters<ProductModel["list"]> = [
    [],
    {
      key: "price",
      order: "descending",
    },
    {
      page: 1,
      count: 10,
    },
  ];

  const rangeFiltersLookup = new Map<
    Filter<Product>["name"],
    Filter<Product>
  >();

  for (const [key, value] of request.nextUrl.searchParams.entries()) {
    switch (key) {
      case "sort": {
        sorting.key = value as keyof Product;
        continue;
      }
      case "order": {
        sorting.order = value as typeof sorting.order;
        continue;
      }
      case "page": {
        pagination.page = Number(value);
        continue;
      }
      case "count": {
        pagination.count = Number(value);
        continue;
      }
    }

    if (!key.startsWith("filter__")) {
      continue;
    }

    const [, name, intervalType] = key.split("__") as [
      never,
      keyof Product,
      "min" | "max" | undefined,
    ];

    if (intervalType === undefined) {
      filters.push({
        name,
        label: "",
        type: "multi-select",
        values: value.split(","),
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
      } as Filter<Product>);
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
    } as Filter<Product>);
  }

  filters.push(...rangeFiltersLookup.values());

  return [filters, sorting, pagination];
}
