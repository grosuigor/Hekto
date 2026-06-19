import { listProductsByIds } from "@/services/api";
import { itemsStorage } from "@/services/storage";

export async function loader(type: "cart" | "wishlist") {
  const storedItems = await itemsStorage.getItems(type);

  if (storedItems === null || storedItems.length === 0) {
    return [];
  }

  const ids = storedItems.map((storedItem) => storedItem.productId);

  const products = await listProductsByIds(ids);

  return products;
}