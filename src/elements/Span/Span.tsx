import React from "react";
import cn from "classnames";
import { SpanProps } from "./Span.props";
import styles from "./Span.module.scss";

export const Span = ({ children, color }: SpanProps) => {
  return (
    <span
      className={cn(styles.span, {
        [styles.white]: color === "white",
      })}
    >
      {children}
    </span>
  );
};
