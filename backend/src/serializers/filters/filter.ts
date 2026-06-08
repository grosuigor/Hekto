import type { Filter } from "@/types";
import { Serializer } from "../base";

export class FilterSerializer<T> extends Serializer<Filter<T>> {
  protected __performSerilization(product: Filter<T>): Filter<T> {
    return product;
  }
}
