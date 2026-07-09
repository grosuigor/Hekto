import { useCallback, useMemo, useRef, useState } from "react";

const MAX_SCROLL_DURATION = 1000

export function useCarousel(itemsCount: number, visibleCount: number) {
  const [currentStep, setCurrentStep] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef<boolean>(false);
  const lastScrollLeft = useRef<number>(0);

  const stepsCount = useMemo(
    () => Math.ceil(itemsCount / visibleCount),
    [itemsCount, visibleCount],
  );

  const updateCarouselPosition = useCallback(
    (i: number) => {
      if (!carouselRef.current) {
        return;
      }

      let scrollProgress;

      if (i === 0) {
        scrollProgress = 0;
      } else {
        scrollProgress = Math.min((1 / itemsCount) * i * visibleCount, 1);
      }

      lastScrollLeft.current = carouselRef.current.scrollWidth * scrollProgress;

      isScrolling.current = true;
      carouselRef.current.scrollTo({
        left: lastScrollLeft.current,
        behavior: "smooth",
      });

      setCurrentStep(i);

      setTimeout(() => {
        isScrolling.current = false;
      }, MAX_SCROLL_DURATION);
    },
    [itemsCount, visibleCount],
  );

  const pickCurrentStep = useCallback(
    (i: number) => {
      if (isScrolling.current) {
        return;
      }

      updateCarouselPosition(i);
    },
    [updateCarouselPosition],
  );

  const syncCurrentStep = useCallback(() => {
    if (isScrolling.current || !carouselRef.current) {
      return;
    }

    const scrollLeft = carouselRef.current.scrollLeft;
    const scrollableWidth =
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

    let index;

    if (scrollLeft === 0) {
      index = 0;
    } else {
      index = Math.min(Math.floor(
        (scrollLeft * itemsCount) / (scrollableWidth * visibleCount),
      ), stepsCount - 1);
    }

    if (index === currentStep && index < stepsCount - 1) {
      const scrollDirection = Math.sign(scrollLeft - lastScrollLeft.current);
      index += scrollDirection * 1;
    }

    updateCarouselPosition(index);
  }, [currentStep, updateCarouselPosition, itemsCount, visibleCount, stepsCount]);

  return {
    carouselRef,
    stepsCount,
    currentStep,
    setCurrentStep: pickCurrentStep,
    syncCurrentStep,
  };
}
