import { Button } from "@/components/clickable";
import { Icon } from "@/components/icon";
import { Typography } from "@/components/typography";
import type { DropdownProps } from "./types";
import clsx from "clsx/lite";
import styles from "./Dropdown.module.scss";
import { useDropdown } from "./hooks";

export function Dropdown({
  options,
  style,
  className,
  children,
}: DropdownProps) {
  const { containerRef, open, toggleOpen, close } = useDropdown();

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
