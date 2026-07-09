import { Outlet } from "react-router";

import clsx from "clsx/lite";

import { GlobalProvider } from "@/store";

import { Footer, Header } from "../components";

import styles from "./RootLayout.module.scss";

export function RootLayout() {
  return (
    <div className={clsx(styles.layout, styles["layout--root"])}>
      <GlobalProvider>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </GlobalProvider>
    </div>
  );
}
