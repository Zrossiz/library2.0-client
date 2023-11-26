import { FunctionComponent } from "react";
import cn from "classnames";

import { Montserrat } from "next/font/google";
import Head from "next/head";

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

import styles from "./Layout.module.scss";
import { LayoutProps } from "./Layout.props";
import { ToTop } from "@/components";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Express библиотека</title>
      </Head>
      <div className={cn(inter.className, styles.globalWrapper)}>
        <Header />
        <main className={styles.main}>
          {children}
          <ToTop />
        </main>
        <Footer />
      </div>
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
