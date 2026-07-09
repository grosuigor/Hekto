type CheckboxColor = "info" | "secondary" | "danger";

export type CheckboxesProps = {
  filterName: string;
  allValues: string[];
  filterValues: string[];
  color?: CheckboxColor;
};