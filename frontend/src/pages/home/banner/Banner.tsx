import banner from "@/assets/home/banner.png";
import { StyledLink, Carousel, Section, Typography } from "@/components";
import { PATHS } from "@/routing";
import styles from "./Banner.module.scss";

const BANNERS = Array.from({ length: 3 }).map(() => banner);

export function Banner() {
  return (
    <Carousel
      controls={{ className: styles.controls, variant: "square" }}
      className={styles.carousel}
    >
      {BANNERS.map((banner, i) => (
        <Section key={i} bgImage={banner} className={styles.slide}>
          <div className={styles.banner}>
            <Typography variant="body" color="primary" modifier="bold">
              Best Headphones For Your Life....
            </Typography>
            <Typography variant="h1">
              New Trendy Collection Headphones
            </Typography>
            <Typography variant="body" color="grey-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </Typography>
            <StyledLink to={PATHS.products} variant="filled">
              <Typography variant="subtitle" modifier="extra-small">
                Show Now
              </Typography>
            </StyledLink>
          </div>
        </Section>
      ))}
    </Carousel>
  );
}
