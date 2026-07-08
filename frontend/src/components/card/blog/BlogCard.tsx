import { Button } from "@/components/clickable";
import { Icon } from "@/components/icon";
import { Image } from "@/components/image";
import { Typography } from "@/components/typography";
import type { BlogCardProps } from "./types";
import { CardContainer } from "../CardContainer";
import styles from "./BlogCard.module.scss";

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <CardContainer path={blog.path} className={styles.card}>
      <Image src={blog.thumbnail} alt={blog.title} isLocal />
      <div className={styles.card__body}>
        <div className={styles.card__metadata}>
          <div>
            <Icon name="pen" />
            <Typography variant="label" modifier="small">
              {blog.author}
            </Typography>
          </div>
          <div>
            <Icon name="calendar" />
            <Typography variant="label" modifier="small">
              {blog.date}
            </Typography>
          </div>
        </div>
        <Typography variant="subtitle" modifier="extra-small">
          {blog.title}
        </Typography>
        <Typography
          variant="body"
          color="grey-3"
          className={styles.card__excerpt}
          isLato
        >
          {blog.content}
        </Typography>
        <Button variant="text" color="primary">
          <Typography variant="label" modifier="bold">
            Read More
          </Typography>
        </Button>
      </div>
    </CardContainer>
  );
}
