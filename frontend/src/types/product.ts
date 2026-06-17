type Rating = {
  value: number;
  votedCount: number;
};

type SpecialOffer = {
  startDate: string;
  endDate: string;
  price: number;
};

export type DetailedProduct = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  wasPrice: number;
  isSale: boolean;
  isFeatured: boolean;
  discountPercentage: number;
  description: string;
  rating: Rating;
  createdAt: string;
  specialOffer: SpecialOffer | null;
  colors: string[];
  soldTimes: number;
  code: string;
  thumbnail: string;
  imageSet: string[];
  relatedProducts: PreviewProduct[];
};

export type PreviewProduct = Pick<
  DetailedProduct,
  "id" | "name" | "price" | "wasPrice" | "isSale" | "code" | "thumbnail"
>;

export type PreviewProductType = "latest" | "trending" | "featured";

export type PreviewProducts<T extends PreviewProductType> = T extends "latest"
  ? PreviewProduct[][]
  : PreviewProduct[];

export type ListedProduct = Pick<
  DetailedProduct,
  "id" | "name" | "price" | "wasPrice" | "description" | "rating" | "thumbnail"
>;

export type ListedProductWithTotal = {
  products: ListedProduct[],
  total: number
}