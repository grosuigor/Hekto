import { Button } from "@/components";
import { Image } from "@/components/image";
import clsx from "clsx/lite";
import { useMemo, useState } from "react";
import styles from "./Gallery.module.scss";

type GalleryProps = {
  images: string[];
  alt: string;
};

export function Gallery({ images, alt }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = useMemo(
    () => images[activeIndex] ?? images[0],
    [activeIndex, images],
  );

  return (
    <div className={styles.gallery}>
      <div className={styles.thumbnails}>
        {images.map((src, index) => (
          <Button
            variant="text"
            key={`${src}-${index}`}
            className={clsx(
              styles.thumbnail,
              index === activeIndex && styles["thumbnail--active"],
            )}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show image ${index + 1}`}
            aria-current={index === activeIndex}
          >
            <Image
              src={src}
              alt={`${alt} thumbnail ${index + 1}`}
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
