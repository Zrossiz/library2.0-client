import React from "react";
import cn from "classnames";
import styles from "./Htag.module.scss";
import { HtagProps } from "./Htag.props";

export const Htag = ({ tag, children, className }: HtagProps) => {
  switch (tag) {
    case "h1":
      return (
        <h1 className={cn(styles.tag, styles.h1, className)}>{children}</h1>
      );
    case "h2":
      return (
        <h2 className={cn(styles.tag, styles.h2, className)}>{children}</h2>
      );
    case "h3":
      return (
        <h3 className={cn(styles.tag, styles.h3, className)}>{children}</h3>
      );

    default:
      <h1 className={cn(styles.tag)}>{children}</h1>;
  }
};
