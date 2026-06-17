import { ROUTE_IDS } from "@/routing";
import { PreviewProduct } from "@/types";
import { useRouteLoaderData } from "react-router";

export function useLoadedCartProduct(): PreviewProduct[] | undefined {
  const products = useRouteLoaderData(ROUTE_IDS.cart);

  return products ?? undefined;
}
