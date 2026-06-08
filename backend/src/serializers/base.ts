import { QuerySet } from "@/storage";

export abstract class Serializer<T extends object, D = T> {
  serialize(data: T | T[] | QuerySet<T>): D | D[] {
    const many = data instanceof QuerySet || Array.isArray(data);

    let items;

    if (many) {
      items = Array.isArray(data) ? data : data.toArray();
    } else {
      items = [data];
    }

    const serialized = items.map((item) => this.__performSerilization(item));

    return many ? serialized : serialized[0];
  }

  protected abstract __performSerilization(data: T): D;
}
