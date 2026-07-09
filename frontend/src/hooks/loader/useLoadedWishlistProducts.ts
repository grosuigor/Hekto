import { useRouteLoaderData } from "react-router";

import { PreviewProduct } from "@/types";

import { ROUTE_IDS } from "@/routing";

export function useLoadedWishlistProduct(): PreviewProduct[] | undefined {
  const products = useRouteLoaderData(ROUTE_IDS.wishlist);

  return products ?? undefined;
}
