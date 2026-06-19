import type { RouteGrid } from "./type";

export const FOOTER_ROUTE_GRID: RouteGrid = [
  {
    label: "Categories",
    routes: [
      {
        label: "Laptops & Computers",
        path: "/products?filter__category=Laptops",
      },
      {
        label: "Cameras & Photography",
        path: "/products?filter__category=Cameras and Photography Equipment",
      },
      {
        label: "Smart Phones & Tablets",
        path: "/products?filter__category=Mobile Phones,Tablets",
      },
      {
        label: "Video Games & Consoles",
        path: "/products?filter__category=Gaming Consoles",
      },
      {
        label: "Waterproof Headphones",
        path: "/products?filter__category=Wearable Technology,Audio Equipment",
      },
    ],
  },
  {
    label: "Customer Care",
    routes: [
      {
        label: "My Account",
        path: "/account",
      },
      {
        label: "Discount",
        path: "/products?sort=discountPercentage",
      },
      {
        label: "Returns",
        path: "/returns",
      },
      {
        label: "Orders History",
        path: "/account/order_history",
      },
      {
        label: "Order Tracking",
        path: "/account/order_tracking",
      },
    ],
  },
  {
    label: "Pages",
    routes: [
      {
        label: "Blog",
        path: "/blog",
      },
      {
        label: "Browse the Shop",
        path: "/products",
      },
      {
        label: "Category",
        path: "/products",
      },
      {
        label: "Pre-Built Pages",
        path: "/prebuilt_pages",
      },
      {
        label: "Visual Composer Elements",
        path: "/visual_composer_elements",
      },
    ],
  },
] as const;
