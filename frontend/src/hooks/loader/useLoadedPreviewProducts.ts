import { useRouteLoaderData } from "react-router";

import type {
  PreviewProducts,
  PreviewProductType,
} from "@/types";

import { ROUTE_IDS } from "@/routing";

export function useLoadedPreviewProducts<T extends PreviewProductType>(
  type: T,
): PreviewProducts<T> | undefined {
  const products = useRouteLoaderData(ROUTE_IDS.home);

  if (products && type in products) {
    return products[type] ?? undefined;
  }

  return undefined;
}
