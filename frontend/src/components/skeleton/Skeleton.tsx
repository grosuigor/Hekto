import clsx from "clsx/lite";

import type { ComponentWithoutChildrenProps } from "@/types";

import styles from "./Skeleton.module.scss";

export function Skeleton({ style, className }: ComponentWithoutChildrenProps) {
  return <div style={style} className={clsx(styles.skeleton, className)}></div>;
}
