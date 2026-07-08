import { useRouteLoaderData } from "react-router";

import { PreviewProduct } from "@/types";

import { ROUTE_IDS } from "@/routing";

export function useLoadedCartProduct(): PreviewProduct[] | undefined {
  const products = useRouteLoaderData(ROUTE_IDS.cart);

  return products ?? undefined;
}
