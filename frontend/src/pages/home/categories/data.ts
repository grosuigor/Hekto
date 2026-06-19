import img11 from "@/assets/home/categories/1_1.png";
import img12 from "@/assets/home/categories/1_2.png";
import img13 from "@/assets/home/categories/1_3.png";
import img14 from "@/assets/home/categories/1_4.png";
import img21 from "@/assets/home/categories/2_1.png";
import img22 from "@/assets/home/categories/2_2.png";
import img23 from "@/assets/home/categories/2_3.png";
import img24 from "@/assets/home/categories/2_4.jpg";
import img31 from "@/assets/home/categories/3_1.jpg";
import img32 from "@/assets/home/categories/3_2.png";
import type { Category } from "@/types";

export const CATEGORIES: Category[] = [
  {
    label: "Perfume",
    thumbnail: img11,
    path: "/products?filter__category=Accent Furniture",
  },
  {
    label: "Present Box",
    thumbnail: img12,
    path: "/products?filter__category=Kids' Furniture",
  },
  {
    label: "Bracelet",
    thumbnail: img13,
    path: "/products?filter__category=Wearable Technology",
  },
  {
    label: "Ring",
    thumbnail: img14,
    path: "/products?filter__category=Wearable Technology",
  },
  {
    label: "Headphones",
    thumbnail: img21,
    path: "/products?filter__category=Audio Equipment",
  },
  {
    label: "Laptops",
    thumbnail: img22,
    path: "/products?filter__category=Laptops",
  },
  {
    label: "Sneakers",
    thumbnail: img23,
    path: "/products?filter__category=Wearable Technology",
  },
  {
    label: "Accessories",
    thumbnail: img24,
    path: "/products?filter__category=Wearable Technology",
  },
  {
    label: "Gaming Consoles",
    thumbnail: img31,
    path: "/products?filter__category=Gaming Consoles",
  },
  {
    label: "Smart Watches",
    thumbnail: img32,
    path: "/products?filter__category=Wearable Technology",
  },
];
