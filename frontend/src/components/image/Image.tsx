import { Skeleton } from "@/components/skeleton";
import type { ComponentWithoutChildrenProps } from "@/types";
import clsx from "clsx/lite";
import { useState } from "react";
import styles from "./Image.module.scss";

type ImageProps = ComponentWithoutChildrenProps & {
  src: string;
  alt: string;
  isLocal?: boolean;
  skeletonProps?: ComponentWithoutChildrenProps;
};

export function Image({
  src,
  alt,
  isLocal = false,
  skeletonProps,
  style,
  className,
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(isLocal);

  return (
    <>
      {!isLocal && (
        <Skeleton
          style={skeletonProps?.style}
          className={clsx(
            styles.skeleton,
            isLoaded && styles["skeleton--hidden"],
            skeletonProps?.className,
          )}
        />
      )}
      <img
        src={src}
        alt={alt}
        aria-busy={!isLocal && !isLoaded}
        onLoad={() => setIsLoaded(true)}
        style={style}
        className={clsx(
          styles.image,
          isLoaded && styles["image--visible"],
          className,
        )}
      />
    </>
  );
}
