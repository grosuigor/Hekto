import { useRouteLoaderData } from "react-router";

import type { DetailedProduct } from "@/types";

import { ROUTE_IDS } from "@/routing";

export function useLoadedDetailedProduct(): DetailedProduct | undefined {
  const product = useRouteLoaderData(ROUTE_IDS.product);

  return product ?? undefined;
}
