import card1Img from "@/assets/home/blog/1.png";
import card2Img from "@/assets/home/blog/2.png";
import card3Img from "@/assets/home/blog/3.png";
import type { Blog } from "@/types";

export const BLOGS: Blog[] = [
  {
    author: "John Doe",
    date: "21 August, 2023",
    title: "Top essential Trends in 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit hendrerit ex.",
    thumbnail: card1Img,
    path: "/blog",
  },
  {
    author: "John Doe",
    date: "21 August, 2023",
    title: "Top essential Trends in 2022",
    content:
      "Nullam nec fringilla erat, ac dapibus nunc. Integer semper ipsum in fermentum aliquam. ",
    thumbnail: card2Img,
    path: "/blog",
  },
  {
    author: "John Doe",
    date: "21 August, 2023",
    title: "Top essential Trends in 2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit hendrerit ex.",
    thumbnail: card3Img,
    path: "/blog",
  },
];
