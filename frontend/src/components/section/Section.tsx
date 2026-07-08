import { Image } from "@/components/image";
import { Typography } from "@/components/typography";
import type { SectionProps } from "./types";
import { clsx } from "clsx/lite";
import styles from "./Section.module.scss";

export function Section({
  component: Component = "section",
  variant = "page",
  bgImage,
  bgColor,
  title,
  gap,
  style,
  className,
  children,
}: SectionProps) {
  return (
    <Component
      className={clsx(
        styles.section,
        styles[`section--${variant}`],
        bgColor && styles[`section--${bgColor}`],
        title && styles[`section--with-title`],
        gap && styles[`section--gap-${gap}`],
        className,
      )}
      style={style}
    >
      {bgImage && (
        <Image
          className={styles.section__img}
          src={bgImage}
          alt="bgImage"
          isLocal
        />
      )}
      {title && <Typography variant="h2">{title}</Typography>}
      {children}
    </Component>
  );
}
