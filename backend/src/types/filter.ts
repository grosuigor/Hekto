export type Filter<T> = {
  name: keyof T;
  label: string;
} & (
  | {
      type: "multi-select";
      values: Array<string>;
    }
  | {
      type: "range";
      values: {
        min: number;
        max: number;
      };
    }
);

export type Sorting<T> = {
  key: keyof T
  order: 'ascending' | 'descending'
}

export type Pagination = {
  page: number
  count: number
}
