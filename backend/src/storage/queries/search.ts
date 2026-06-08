import type { SearchResult } from "@/types";
import { QuerySet } from "./queryset";

export class SearchQuery<T extends object> {
  private readonly _searchKeys: ReadonlyArray<keyof T>;
  private readonly _queryset: Readonly<QuerySet<T>>;

  constructor(items: ReadonlyArray<T>, searchKeys: Array<keyof T>) {
    this._queryset = new QuerySet(items);
    this._searchKeys = searchKeys;
  }

  search(value: string): SearchResult<T>[] {
    const sanitized = value.trim().toLocaleLowerCase();

    const results: SearchResult<T>[] = [];

    for (const item of this._queryset.toArray()) {
      for (const key of this._searchKeys) {
        const isArrayItem =
          Array.isArray(item[key]) && item[key].includes(sanitized);
        const isSubstring =
          typeof item[key] === "string" &&
          item[key].toLocaleLowerCase().includes(sanitized);

        if (isArrayItem || isSubstring) {
          results.push({
            item,
            key,
          });
          break;
        }
      }
    }

    return results;
  }
}
