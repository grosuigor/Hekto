import { Image } from "@/components/image";
import { Typography } from "@/components/typography";
import type { ComponentProps } from "@/types";
import { clsx } from "clsx/lite";
import styles from "./Section.module.scss";

type SectionGap = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

type SectionProps = ComponentProps & {
  component?: React.ElementType;
  variant?: "page" | "layout";
  bgImage?: string;
  bgColor?: "tertiary" | "grey-1" | "grey-2";
  title?: string;
  gap?: SectionGap;
};

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
