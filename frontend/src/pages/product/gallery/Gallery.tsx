import { useMemo, useState } from "react";

import clsx from "clsx/lite";

import { Button } from "@/components";
import { Image } from "@/components/image";

import type { GalleryProps } from "./types";

import styles from "./Gallery.module.scss";

export function Gallery({ images, alt }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = useMemo(
    () => images[activeIndex] ?? images[0],
    [activeIndex, images],
  );

  return (
    <div className={styles.gallery}>
      <div className={styles.thumbnails}>
        {images.map((src, i) => (
          <Button
            variant="text"
            key={`${src}-${i}`}
            className={clsx(
              styles.thumbnail,
              i === activeIndex && styles["thumbnail--active"],
            )}
            onClick={() => setActiveIndex(i)}
            aria-label={`Show image ${i + 1}`}
            aria-current={i === activeIndex}
          >
            <Image
              src={src}
              alt={`${alt} thumbnail ${i + 1}`}
              skeletonProps={{ style: { width: "100%", aspectRatio: "1 / 1" } }}
            />
          </Button>
        ))}
      </div>
      <div className={styles.main}>
        <Image
          src={activeImage}
          alt={alt}
          skeletonProps={{ style: { width: "100%", aspectRatio: "1 / 1" } }}
        />
      </div>
    </div>
  );
}
