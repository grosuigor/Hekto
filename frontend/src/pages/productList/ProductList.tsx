import { Section } from "@/components";
import { QueryProvider } from "@/store";
import { useState } from "react";
import { Outlet, useParams } from "react-router";
import { Filters } from "./filters";
import { loader } from "./loader";
import styles from "./ProductList.module.scss";
import { Products } from "./products";
import { View } from "./view";

function ProductList() {
  const { pid } = useParams();
  const [view, setView] = useState<"grid" | "list">("list");

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
