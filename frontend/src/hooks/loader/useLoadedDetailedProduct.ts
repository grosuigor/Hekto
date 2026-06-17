import { ROUTE_IDS } from "@/routing";
import type { DetailedProduct } from "@/types";
import { useRouteLoaderData } from "react-router";

export function useLoadedDetailedProduct(): DetailedProduct | undefined {
  const product = useRouteLoaderData(ROUTE_IDS.product);

  return product ?? undefined;
}
