import clsx from "clsx/lite";

import { Button, Section, Typography } from "@/components";

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
        <ul className={styles.list}>
          {FEATURES.map((feature, i) => (
            <li
              key={feature}
              className={clsx(
                styles["list__item"],
                styles[`list__item--${(i % 3) + 1}`],
              )}
            >
              <Typography variant="body" color="grey-3">
                {feature}
              </Typography>
            </li>
          ))}
        </ul>
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
