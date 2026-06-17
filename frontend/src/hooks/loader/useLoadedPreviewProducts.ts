import { ROUTE_IDS } from "@/routing";
import type {
  PreviewProducts,
  PreviewProductType,
} from "@/types";
import { useRouteLoaderData } from "react-router";

export function useLoadedPreviewProducts<T extends PreviewProductType>(
  type: T,
): PreviewProducts<T> | undefined {
  const products = useRouteLoaderData(ROUTE_IDS.home);

  if (products && type in products) {
    return products[type] ?? undefined;
  }

  return undefined;
}
