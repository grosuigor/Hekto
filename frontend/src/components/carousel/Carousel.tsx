import { useCarousel } from "@/hooks";
import type {
  ComponentWithChildrenProps,
  ComponentWithoutChildrenProps,
} from "@/types";
import clsx from "clsx/lite";
import { Children } from "react";
import { Button } from "@/components/clickable";
import { Typography } from "@/components/typography";
import styles from "./Carousel.module.scss";

type CarouselProps = ComponentWithChildrenProps & {
  visibleCount?: number;
  container?: ComponentWithoutChildrenProps;
  track?: ComponentWithoutChildrenProps;
  controls: ComponentWithoutChildrenProps & {
    position?: "top" | "bottom";
    variant: "square" | "line" | "dot" | "label";
    labels?: string[];
  };
};

export function Carousel({
  visibleCount = 1,
  container,
  track,
  controls,
  style,
  className,
  children,
}: CarouselProps) {
  const itemsCount = Children.count(children);
  const {
    carouselRef,
    stepsCount,
    currentStep,
    setCurrentStep,
    syncCurrentStep,
  } = useCarousel(itemsCount, visibleCount);

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
            width: `${(itemsCount / visibleCount) * 100}%`,
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
