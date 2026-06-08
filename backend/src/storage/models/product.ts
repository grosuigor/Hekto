import type { Product } from "@/types";
import type { QuerySet } from "../queries";
import { Model } from "./base";

export class ProductModel extends Model<Product> {
  static dbKey = "products";
  static primaryKey = "id";

  constructor(data: Product[]) {
    super(
      "id",
      data.map((d) => ({
        ...d,
        createdAt: new Date(d.createdAt),
        specialOffer: d.specialOffer
          ? {
              ...d.specialOffer,
              startDate: new Date(d.specialOffer.startDate),
              endDate: new Date(d.specialOffer.endDate),
            }
          : null,
      })),
      ["category", "brand", "name"],
    );
  }

  listFeatured(max?: number) {
    return this.__data.sort("rating").paginate(max);
  }

  listLatest(max?: number) {
    const transformers: Array<(qs: QuerySet<Product>) => QuerySet<Product>> = [
      (qs) => qs,
      (qs) => qs.sort("soldTimes"),
      (qs) => qs.filter((product) => product.isFeatured),
      (qs) => qs.filter((product) => product.specialOffer !== null),
    ];

    return transformers.map((transformer) =>
      transformer(this.__data.sort("createdAt")).paginate(max),
    );
  }

  listTrending(max?: number) {
    return this.__data.sort("soldTimes").paginate(max);
  }

  listRelated(id: string, max?: number) {
    const product = this.retrieve(id);

    if (!product) {
      return [];
    }

    return this.__data
      .filter((item) => item.id !== id && item.category === product.category)
      .sort("soldTimes")
      .paginate(max);
  }

  retrieveMany(ids: string[]) {
    const uniqueIds = [...new Set(ids)];

    return uniqueIds
      .map((id) => this.retrieve(id))
      .filter((product) => product !== undefined);
  }
}
