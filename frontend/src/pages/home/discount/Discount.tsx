import {
  Carousel,
  Icon,
  Image,
  Section,
  StyledLink,
  Typography,
} from "@/components";
import { PATHS } from "@/routing";
import { DISCOUNTS } from "./data";
import styles from "./Discount.module.scss";

export function Discount() {
  return (
    <Section gap="md" title="Discount Item">
      <Carousel
        controls={{
          style: { gap: "3.2rem", paddingBottom: "2.6rem" },
          position: "top",
          variant: "label",
          labels: DISCOUNTS.map((d) => d.label),
        }}
      >
        {DISCOUNTS.map((discount) => (
          <div key={discount.product.id} className={styles.item}>
            <div className={styles.content}>
              <Typography variant="h3">{discount.title}</Typography>
              <Typography variant="subtitle" color="primary">
                {discount.product.title}
              </Typography>
              <Typography variant="body" modifier="big" color="grey-3" isLato>
                {discount.product.desc}
              </Typography>
              <div className={styles["content-features"]}>
                {discount.product.features.map((feature, i) => (
                  <div key={i}>
                    <Icon name="checkmark" size="lg" />
                    <Typography variant="body" color="grey-3" isLato>
                      {feature}
                    </Typography>
                  </div>
                ))}
              </div>
              <StyledLink to={`${PATHS.products}${discount.product.id}`} variant="filled">
                <Typography variant="subtitle" modifier="extra-small">
                  Show Now
                </Typography>
              </StyledLink>
            </div>
            <div className={styles["image-container"]}>
              <Image src={discount.thumbnail} alt={discount.title} isLocal />
            </div>
          </div>
        ))}
      </Carousel>
    </Section>
  );
}
