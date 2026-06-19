import {
  listFeaturedProducts,
  listLatestProducts,
  listTrendingProducts,
} from "@/services/api";

export async function loader() {
  const [featured, latest, trending] = await Promise.all([
    listFeaturedProducts(),
    listLatestProducts(),
    listTrendingProducts(),
  ]);

  return {
    featured,
    latest,
    trending,
  };
}
