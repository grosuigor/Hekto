import { Input, Typography } from "@/components";
import styles from "./Checkboxes.module.scss";

type CheckboxesProps = {
  filterName: string;
  allValues: string[];
  filterValues: string[];
  color?: "info" | "secondary" | "danger";
};

export function Checkboxes({
  filterName,
  allValues,
  filterValues,
  color,
}: CheckboxesProps) {
  return allValues.map((value, i) => (
    <div key={i} className={styles.checkbox}>
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
