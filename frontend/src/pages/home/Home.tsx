import { Banner } from "./banner";
import { BlogSection } from "./blog";
import { Categories } from "./categories";
import { Discount } from "./discount";
import { FeaturedProducts, LatestProducts, TrendingProducts } from "./products";
import { UniqueFeatures } from "./uniqueFeatures";
import { Updates } from "./updates";

import { loader } from "./loader";

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
