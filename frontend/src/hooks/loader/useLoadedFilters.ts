import { ROUTE_IDS } from "@/routing";
import type { Filter } from "@/types";
import { useRouteLoaderData } from "react-router";

export function useLoadedFilters(): Filter[] | undefined {
  const data = useRouteLoaderData(ROUTE_IDS.productList);

  return data?.filters;
}
