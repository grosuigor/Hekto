import { Banner } from "./banner";
import { BlogSection } from "./blog";
import { Categories } from "./categories";
import { Discount } from "./discount";
import { loader } from "./loader";
import { FeaturedProducts, LatestProducts, TrendingProducts } from "./products";
import { UniqueFeatures } from "./uniqueFeatures";
import { Updates } from "./updates";

function Home() {
  return (
    <>
      <Banner />
      <FeaturedProducts />
      <LatestProducts />
      <UniqueFeatures />
      <TrendingProducts />
      <Discount />
      <Categories />
      <Updates />
      <BlogSection />
    </>
  );
}

Home.loader = loader;

export { Home };
