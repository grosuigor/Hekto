import { useRouteLoaderData } from "react-router";

import { ListedProductWithTotal } from "@/types";

import { ROUTE_IDS } from "@/routing";

export function useLoadedListedProducts(): ListedProductWithTotal | undefined {
  const data = useRouteLoaderData(ROUTE_IDS.productList);

  return data?.products;
}
