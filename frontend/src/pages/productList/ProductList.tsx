import { useState } from "react";

import { Outlet, useParams } from "react-router";

import type { View as ViewType } from "@/types";

import { QueryProvider } from "@/store";

import { Section } from "@/components";

import { Filters } from "./filters";
import { loader } from "./loader";
import { Products } from "./products";
import { View } from "./view";

import styles from "./ProductList.module.scss";

function ProductList() {
  const { pid } = useParams();
  const [view, setView] = useState<ViewType>("list");

  if (pid) {
    return <Outlet />;
  }

  return (
    <QueryProvider>
      <Section title="Products" gap="md">
        <View view={view} setView={setView} />
        <div className={styles.main}>
          <Filters />
          <Products view={view} />
        </div>
      </Section>
    </QueryProvider>
  );
}

ProductList.loader = loader;

export { ProductList };
