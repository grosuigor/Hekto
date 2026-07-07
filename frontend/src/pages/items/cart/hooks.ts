import { usePrice } from "@/hooks";
import { CartProduct } from "@/types";
import { useMemo } from "react";

const SHIPPING_PRICE_USD = 100;

export function useTotal(products: undefined | undefined[] | CartProduct[]) {
  const subtotal = useMemo(() => {
    if (products === undefined) {
      return 0;
    }

    return products.reduce(
      (sum, product) => sum + (product?.price ?? 0) * (product?.quantity ?? 0),
      0,
    );
  }, [products]);

  const total = useMemo(() => subtotal + SHIPPING_PRICE_USD, [subtotal]);

  const [subtotalPrice, shippingPrice, totalPrice] = usePrice([
    subtotal,
    SHIPPING_PRICE_USD,
    total,
  ]);

  return [subtotalPrice, shippingPrice, totalPrice];
}