import type { ComponentWithoutChildrenProps } from "@/types";
import clsx from "clsx/lite";
import styles from "./Skeleton.module.scss";

export function Skeleton({ style, className }: ComponentWithoutChildrenProps) {
  return <div style={style} className={clsx(styles.skeleton, className)}></div>;
}
