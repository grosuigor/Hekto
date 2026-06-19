import { ROUTE_IDS } from "@/routing";
import { ListedProductWithTotal } from "@/types";
import { useRouteLoaderData } from "react-router";

export function useLoadedListedProducts(): ListedProductWithTotal | undefined {
  const data = useRouteLoaderData(ROUTE_IDS.productList);

  return data?.products;
}
