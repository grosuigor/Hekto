import { Button, List, Section, Typography } from "@/components";

import { FEATURES } from "./data";

import uniqueFeaturesImg from "@/assets/home/unique_features.png";

import styles from "./UniqueFeatures.module.scss";

export function UniqueFeatures() {
  return (
    <Section bgImage={uniqueFeaturesImg} className={styles.section}>
      <div className={styles["unique-features"]}>
        <Typography variant="h3">
          Unique Features Of Latest & Trending Poducts
        </Typography>
        <List keys={FEATURES.map((feature) => feature.toString())}>
          {FEATURES.map((feature) => (
            <Typography key={feature} variant="body" color="grey-3">
              {feature}
            </Typography>
          ))}
        </List>
        <div className={styles["unique-features__cta"]}>
          <Button variant="filled">
            <Typography variant="subtitle" modifier="extra-small">
              Add To Cart
            </Typography>
          </Button>
          <Typography variant="body">
            B&B Italian Sofa
            <br />
            $32.00
          </Typography>
        </div>
      </div>
    </Section>
  );
}
