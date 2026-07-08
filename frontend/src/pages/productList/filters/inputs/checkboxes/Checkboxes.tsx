import { Input, Typography } from "@/components";

import type { CheckboxesProps } from "./types";

import styles from "./Checkboxes.module.scss";

export function Checkboxes({
  filterName,
  allValues,
  filterValues,
  color,
}: CheckboxesProps) {
  return allValues.map((value) => (
    <div key={value} className={styles.checkbox}>
      <Input.Checkbox
        id={`${filterName}_${value}`}
        checked={filterValues.includes(value)}
        data-name={filterName}
        data-value={value}
        color={color}
      />
      <Typography
        variant="body"
        component="label"
        color="grey-3"
        htmlFor={`${filterName}_${value}`}
        isLato
      >
        {value}
      </Typography>
    </div>
  ));
}
