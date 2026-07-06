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
  const [activei, setActivei] = useState(0);
  const activeImage = useMemo(
    () => images[activei] ?? images[0],
    [activei, images],
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
              i === activei && styles["thumbnail--active"],
            )}
            onClick={() => setActivei(i)}
            aria-label={`Show image ${i + 1}`}
            aria-current={i === activei}
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
