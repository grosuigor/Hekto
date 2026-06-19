import { StoredItem, StoredProduct } from "@/types";
import { useMemo } from "react";

export function useMappedItems<Item extends StoredItem>(
  isPending: boolean,
  items: Item[],
  products: StoredProduct[] | undefined,
): undefined | undefined[] | (StoredProduct & Item)[] {
  const productMap = useMemo(() => {
    if (!products) {
      return undefined;
    }

    return new Map(products.map((product) => [product.id, product]));
  }, [products]);

  const mappedProducts = useMemo(() => {
    if (!productMap) {
      if (isPending) {
        return undefined;
      }

      return Array.from({ length: items.length }).fill(
        undefined,
      ) as undefined[];
    }

    return items.map((item) => ({
      ...productMap.get(item.productId)!,
      ...item,
    }));
  }, [isPending, items, productMap]);

  return mappedProducts;
}
