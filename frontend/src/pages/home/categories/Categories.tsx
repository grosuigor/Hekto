import { Carousel, CategoryCard, Section } from "@/components";
import { useCarouselVisibleCount } from "@/hooks";
import { CATEGORIES } from "./data";

export function Categories() {
  const visibleCount = useCarouselVisibleCount(4, { lg: 3, md: 2, sm: 1 });

  return (
    <Section gap="lg" title="Top Categories">
      <Carousel
        visibleCount={visibleCount}
        track={{ style: { gap: "6.4rem", padding: "0 4.8rem" } }}
        controls={{ style: { gap: "1.8rem" }, variant: "dot" }}
      >
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.label} category={category} />
        ))}
      </Carousel>
    </Section>
  );
}
