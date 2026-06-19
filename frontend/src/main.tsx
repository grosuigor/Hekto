import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { RootLayout } from "@/layouts";
import { Cart, Wishlist, Home, NotFound, Product, ProductList } from "@/pages";
import { ROUTE_IDS, PATHS } from "@/routing";

import "@/styles/index.scss";

const root = document.getElementById("root")!;
const router = createBrowserRouter([
  {
    id: ROUTE_IDS.root,
    path: PATHS.home,
    Component: RootLayout,
    children: [
      {
        id: ROUTE_IDS.home,
        index: true,
        Component: Home,
        loader: Home.loader,
        HydrateFallback: Home,
      },
      {
        id: ROUTE_IDS.productList,
        path: PATHS.products,
        Component: ProductList,
        loader: ProductList.loader,
        shouldRevalidate: ({ currentUrl, nextUrl }) =>
          currentUrl.search !== nextUrl.search,
        HydrateFallback: ProductList,
        children: [
          {
            id: ROUTE_IDS.product,
            path: ":pid",
            Component: Product,
            loader: Product.loader,
            HydrateFallback: Product,
          },
        ],
      },
      {
        id: ROUTE_IDS.cart,
        path: PATHS.cart,
        Component: Cart,
        loader: Cart.loader,
        HydrateFallback: Cart,
      },
      {
        id: ROUTE_IDS.wishlist,
        path: PATHS.wishlist,
        Component: Wishlist,
        loader: Wishlist.loader,
        HydrateFallback: Wishlist,
      },
      {
        id: ROUTE_IDS.notFound,
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
