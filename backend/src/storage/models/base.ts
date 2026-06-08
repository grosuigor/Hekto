import type { Filter, Pagination, Sorting } from "@/types";
import { QuerySet } from "../queries";
import { SearchQuery } from "../queries/search";

export abstract class Model<T extends object> {
  static dbKey: string;
  private _primaryKey: keyof T;
  private _searchQuery?: Readonly<SearchQuery<T>>;
  protected __data: QuerySet<T>;

  constructor(primaryKey: keyof T, data: T[], searchKeys?: Array<keyof T>) {
    this._primaryKey = primaryKey;
    this.__data = new QuerySet(data);
    if (searchKeys) {
      this._searchQuery = new SearchQuery(data, searchKeys);
    }
  }

  list(filters: Filter<T>[], sorting: Sorting<T>, pagination: Pagination) {
    return this.__data.filter(filters).sort(sorting).paginate(pagination);
  }

  listWithTotal(
    filters: Filter<T>[],
    sorting: Sorting<T>,
    pagination: Pagination,
  ) {
    const qs = this.__data.filter(filters).sort(sorting);

    const total = qs.count();

    return {
      products: qs.paginate(pagination),
      total: total,
    };
  }

  retrieve(primaryKey: T[typeof this._primaryKey]) {
    return this.__data.retrieve((p) => p[this._primaryKey] === primaryKey);
  }

  search(value: string) {
    if (!this._searchQuery) {
      return [];
    }

    return this._searchQuery.search(value);
  }
}
