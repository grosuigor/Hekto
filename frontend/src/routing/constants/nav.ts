import type { Route } from "./type";
import { PATHS } from "./paths";

export const NAV_ROUTES: Route[] = [
  {
    label: "Home",
    path: PATHS.home,
  },
  {
    label: "Products",
    path: PATHS.products,
  },
  {
    label: "Blog",
    path: PATHS.blog,
  },
  {
    label: "Contacts",
    path: PATHS.contacts,
  },
];
