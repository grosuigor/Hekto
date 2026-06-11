import type { Filter, Product } from "@/types";
import { Model } from "./base";

export class FilterModel extends Model<Filter<Product>> {
  static dbKey = "filters";
  static primaryKey = "name";

  constructor(data: Filter<Product>[]) {
    super("name", data);
  }

  list() {
    return this.__data;
  }
}
