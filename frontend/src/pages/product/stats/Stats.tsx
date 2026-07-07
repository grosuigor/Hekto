import { Icon, Tabs, Typography } from "@/components";
import { DetailedProduct } from "@/types";
import styles from "./Stats.module.scss";
import { TAB_NAMES } from "./data";

type StatsProps = {
  product: DetailedProduct;
};

export function Stats({ product }: StatsProps) {
  return (
    <Tabs names={TAB_NAMES}>
      <div className={styles.description}>
        <div>
          <Typography variant="subtitle">About</Typography>
          <Typography variant="body" color="grey-3" isLato>
            {product.description}
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle">More details</Typography>
          <div className={styles.description__list}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i}>
                <Icon name="checkmark" />
                <Typography variant="body" color="grey-3" isLato>
                  Detail {i + 1}.
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles["additional-info"]}>
        <Typography variant="subtitle">No Info yet...</Typography>
      </div>
      <div className={styles.reviews}>
        <Typography variant="subtitle">No Reviews yet...</Typography>
      </div>
      <div className={styles.video}>
        <Typography variant="subtitle">No Videos yet...</Typography>
      </div>
    </Tabs>
  );
}
