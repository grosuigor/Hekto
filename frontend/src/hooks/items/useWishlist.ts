import { useLoadedWishlistProduct } from "@/hooks/loader";
import { useWishlistContext, useWishlistDispatchContext } from "@/store";
import { WishlistProduct } from "@/types";
import { useMappedItems } from "./useMappedItems";

type UseWishlistFn = () => [
  undefined | undefined[] | WishlistProduct[],
  ReturnType<typeof useWishlistDispatchContext>,
];

export const useWishlist: UseWishlistFn = () => {
  const { items, isPending } = useWishlistContext();
  const dispatch = useWishlistDispatchContext();
  const products = useLoadedWishlistProduct();

  const mappedProducts = useMappedItems(isPending, items, products);

  return [mappedProducts, dispatch];
};
