import { useLoadedCartProduct } from "@/hooks/loader";
import { useCartContext, useCartDispatchContext } from "@/store";
import { CartProduct } from "@/types";
import { useMappedItems } from "./useMappedItems";

type UseCartFn = () => [
  undefined | undefined[] | CartProduct[],
  ReturnType<typeof useCartDispatchContext>,
];

export const useCart: UseCartFn = () => {
  const { items, isPending } = useCartContext();
  const dispatch = useCartDispatchContext();
  const products = useLoadedCartProduct();

  const mappedProducts = useMappedItems(isPending, items, products);

  return [mappedProducts, dispatch];
};
