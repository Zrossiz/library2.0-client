import React from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import styles from "./Navigation.module.scss";
import { LinkItem } from "@/elements";
import { navData } from "@/helpers/constants";

export const Navigation = () => {
  const router = useRouter();
  const pathname = router.pathname;
  console.log(pathname);
  console.log(router.asPath);
  return (
    <nav className={styles.wrapper}>
      {navData.map((item, index) => (
        <LinkItem
          className={cn({
            [styles.active]: pathname == item.href,
          })}
          icon={item.icon}
          href={item.href}
          key={index}
        >
          {item.name}
        </LinkItem>
      ))}
    </nav>
  );
};
