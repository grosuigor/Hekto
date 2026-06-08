export type SearchResult<T> = {
  item: T;
  key: keyof T;
};