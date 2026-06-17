import { searchProducts } from "@/services/api";
import type { SearchResult } from "@/types";
import { useEffect, useMemo, useState, useTransition } from "react";

const MIN_QUERY_LENGTH = 3;

export function useProductSearch(query: string) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isPending, startTransition] = useTransition();

  const trimmedQuery = useMemo(() => query.trim(), [query]);
  const isEnabled = trimmedQuery.length >= MIN_QUERY_LENGTH;

  useEffect(() => {
    if (!isEnabled) {
      startTransition(() => {
        setResults([]);
      });
      return;
    }

    let cancelled = false;

    startTransition(async () => {
      const data = await searchProducts(trimmedQuery);
      if (cancelled) return;

      setResults(data ?? []);
    });

    return () => {
      cancelled = true;
    };
  }, [trimmedQuery, isEnabled]);

  const groupedResults = useMemo(() => {
    const categories = new Set<string>();
    const brands = new Set<string>();
    const products: SearchResult[] = [];

    for (const result of results) {
      switch (result.key) {
        case "category":
          categories.add(result.item.category);
          break;
        case "brand":
          brands.add(result.item.brand);
          break;
        case "name":
          products.push(result);
          break;
      }
    }

    const groups = [
      ...categories
        .values()
        .map((category) => ({ value: category, type: "category" as const })),
      ...brands
        .values()
        .map((brand) => ({ value: brand, type: "brand" as const })),
    ];

    return {
      groups: groups,
      products,
    };
  }, [results]);

  return {
    results: groupedResults,
    loading: isEnabled && isPending,
    isEnabled,
  };
}
