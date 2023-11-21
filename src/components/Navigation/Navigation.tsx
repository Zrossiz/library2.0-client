import React from "react";
import styles from "./Navigation.module.scss";
import { LinkItem } from "@/elements";
import { navData } from "@/helpers/constants";

export const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      {navData.map((item, index) => (
        <LinkItem icon={item.icon} href={item.href} key={index}>
          {item.name}
        </LinkItem>
      ))}
    </nav>
  );
};
