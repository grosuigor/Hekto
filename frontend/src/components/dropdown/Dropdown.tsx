import { Button } from "@/components/clickable";
import { Icon } from "@/components/icon";
import { Typography } from "@/components/typography";
import type { ComponentProps } from "@/types";
import clsx from "clsx/lite";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Dropdown.module.scss";

type DropdownProps = ComponentProps & {
  options: Array<{
    text: string;
    onClick: () => void;
  }>;
};

export function Dropdown({
  options,
  style,
  className,
  children,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onPointerDown = (e: PointerEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        close();
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [close, open]);

  return (
    <div
      ref={containerRef}
      style={style}
      className={clsx(className, styles.container, open && styles["container--open"])}
    >
      <Button
        variant="text"
        color="white"
        size="sm"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={toggleOpen}
      >
        {children}
        <Icon name="chevron-down" />
      </Button>
      <div className={styles.list} role="listbox">
        {options.map((option) => (
          <Button
            key={option.text}
            variant="text"
            color="white"
            size="sm"
            onClick={() => {
              option.onClick();
              close();
            }}
          >
            <Typography variant="subtitle" modifier="extra-small">
              {option.text}
            </Typography>
          </Button>
        ))}
      </div>
    </div>
  );
}
