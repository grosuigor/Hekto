import { useRouteLoaderData } from "react-router";

import type { Filter } from "@/types";

import { ROUTE_IDS } from "@/routing";

export function useLoadedFilters(): Filter[] | undefined {
  const data = useRouteLoaderData(ROUTE_IDS.productList);

  return data?.filters;
}
