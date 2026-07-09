import { Image } from "@/components/image";
import { Typography } from "@/components/typography";
import type { CategoryCardProps } from "./types";
import { CardContainer } from "../CardContainer";
import { CardButton } from "../button";
import styles from "./CategoryCard.module.scss";

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <CardContainer path={category.path} className={styles.card}>
      <div className={styles["img-container"]}>
        <Image src={category.thumbnail} alt={category.label} isLocal />
        <CardButton variant="Category" />
      </div>
      <Typography variant="subtitle" modifier="small">
        {category.label}
      </Typography>
    </CardContainer>
  );
}
