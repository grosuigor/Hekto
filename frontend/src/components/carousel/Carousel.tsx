import clsx from "clsx/lite";
import { Children, useMemo } from "react";
import { Button } from "@/components/clickable";
import { Typography } from "@/components/typography";
import { useCarousel, useVisibleCount } from "./hooks";
import styles from "./Carousel.module.scss";
import type { CarouselProps } from "./types";

export function Carousel({
  visibleCountOptions = { desktop: 1 },
  container,
  track,
  controls,
  style,
  className,
  children,
}: CarouselProps) {
  const itemsCount = Children.count(children);
  const visibleCount = useVisibleCount(visibleCountOptions);
  const {
    carouselRef,
    stepsCount,
    currentStep,
    setCurrentStep,
    syncCurrentStep,
  } = useCarousel(itemsCount, visibleCount);

  const trackWidth = useMemo(() => {
    return `${(itemsCount / visibleCount) * 100}%`;
  }, [itemsCount, visibleCount]);

  return (
    <div
      style={container?.style}
      className={clsx(
        styles.container,
        controls.position === "top"
          ? styles["container--controls-top"]
          : styles["container--controls-bottom"],
        container?.className,
      )}
    >
      <div
        style={style}
        ref={carouselRef}
        className={clsx(styles.carousel, className)}
        onScrollEnd={syncCurrentStep}
      >
        <div
          style={{
            ...track?.style,
            width: trackWidth,
          }}
          className={clsx(styles.track, track?.className)}
        >
          {children}
        </div>
      </div>
      <div
        style={controls.style}
        className={clsx(styles.controls, controls.className)}
      >
        {Array.from({ length: stepsCount }).map((_, i) => (
          <Button
            variant="text"
            key={i}
            className={clsx(
              styles.control,
              styles[`control--${controls.variant}`],
              i === currentStep && styles.active,
            )}
            disabled={i === currentStep}
            onClick={() => setCurrentStep(i)}
          >
            {controls.labels && (
              <Typography variant="body" modifier="big" isLato>
                {controls.labels[i]}
              </Typography>
            )}
          </Button>
        ))}
      </div>
    </div>
  );
}
