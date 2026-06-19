import { ROUTE_IDS } from "@/routing";
import { PreviewProduct } from "@/types";
import { useRouteLoaderData } from "react-router";

export function useLoadedWishlistProduct(): PreviewProduct[] | undefined {
  const products = useRouteLoaderData(ROUTE_IDS.wishlist);

  return products ?? undefined;
}
