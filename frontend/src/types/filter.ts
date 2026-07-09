import { ListedProduct } from "./product";

export type Range = {
  min: number;
  max: number;
};

export type Filter = {
  name: keyof ListedProduct;
  label: string;
} & (
  | {
      type: "multi-select";
      values: Array<string>;
    }
  | {
      type: "range";
      values: Range;
    }
);

export type Sorting = {
  key: "price" | "rating";
  order: "ascending" | "descending";
};

export type Pagination = {
  page: number;
  count: number;
};

export type Query = {
  sorting: Sorting;
  pagination: Pagination;
  filters: Filter[];
};

export type View = "grid" | "list";