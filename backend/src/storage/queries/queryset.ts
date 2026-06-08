import type { Filter, Pagination, Sorting } from "@/types";

type FilterFn<T> = Parameters<ReadonlyArray<T>["filter"]>[0];
type SortFn<T> = Exclude<
  Parameters<ReadonlyArray<T>["toSorted"]>[0],
  undefined
>;
type FindFn<T> = Parameters<ReadonlyArray<T>["find"]>[0];

export class QuerySet<T extends object> {
  private readonly _items: ReadonlyArray<T>;

  constructor(items: ReadonlyArray<T>) {
    this._items = items;
  }

  filter(filter: FilterFn<T>): QuerySet<T>;
  filter(filter: Filter<T>): QuerySet<T>;
  filter(filters: Filter<T>[]): QuerySet<T>;

  filter(arg1: FilterFn<T> | Filter<T> | Filter<T>[]) {
    if (typeof arg1 === "function") {
      return new QuerySet(this._items.filter(arg1));
    }

    const filters = Array.isArray(arg1) ? arg1 : [arg1];

    return new QuerySet(
      this._items.filter((item) => {
        return filters.every((filter) => {
          const value = item[filter.name];

          if (filter.type === "multi-select") {
            const selected = new Set(filter.values);

            if (Array.isArray(value)) {
              return value.some((v) => selected.has(v));
            }

            return typeof value === "string" ? selected.has(value) : false;
          }

          let propertyValue: unknown = value;

          if (
            typeof propertyValue === "object" &&
            propertyValue !== null &&
            "value" in propertyValue
          ) {
            propertyValue = propertyValue.value;
          }

          return (
            typeof propertyValue === "number" &&
            filter.values.min <= propertyValue &&
            propertyValue <= filter.values.max
          );
        });
      }),
    );
  }

  sort(sorting: SortFn<T>): QuerySet<T>;
  sort(sorting: Sorting<T>): QuerySet<T>;
  sort(key: Sorting<T>["key"], order?: Sorting<T>["order"]): QuerySet<T>;

  sort(
    arg1: SortFn<T> | Sorting<T>["key"] | Sorting<T>,
    arg2: Sorting<T>["order"] = "descending",
  ) {
    if (typeof arg1 === "function") {
      return new QuerySet(this._items.toSorted(arg1));
    }

    let key: Sorting<T>["key"], order;
    if (typeof arg1 === "object") {
      [key, order] = [arg1.key, arg1.order];
    } else {
      [key, order] = [arg1, arg2];
    }
    const direction = order === "ascending" ? 1 : -1;

    const getValue = (item: T, key: keyof T) => {
      if (
        key === "rating" &&
        "rating" in item &&
        typeof item.rating === "object" &&
        item.rating !== null &&
        "value" in item.rating
      ) {
        return Number(item.rating.value);
      }
      return Number(item[key]);
    };

    return new QuerySet(
      this._items.toSorted(
        (p1, p2) => direction * (getValue(p1, key) - getValue(p2, key)),
      ),
    );
  }

  paginate(pagination?: Pagination): QuerySet<T>;
  paginate(count?: number, min?: number): QuerySet<T>;

  paginate(arg1?: Pagination | number, arg2: number = 1) {
    if (arg1 === undefined) {
      return this;
    }

    let count, page;

    if (typeof arg1 === "object") {
      [count, page] = [arg1.count, arg1.page];
    } else {
      [count, page] = [arg1, arg2];
    }
    return new QuerySet(
      this._items.slice(
        (page - 1) * count,
        Math.min(page * count, this._items.length),
      ),
    );
  }

  retrieve(predicate: FindFn<T>) {
    return this._items.find(predicate);
  }

  count() {
    return this._items.length;
  }

  toArray() {
    return [...this._items];
  }
}
