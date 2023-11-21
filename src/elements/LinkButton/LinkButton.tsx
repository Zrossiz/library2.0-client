import React from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./LinkButton.module.scss";
import { LinkItemProps } from "./LinkButton.props";

export const LinkButton = ({ href, children, className }: LinkItemProps) => {
  return (
    <Link className={cn(className, styles.wrapper)} href={href}>
      {children}
    </Link>
  );
};
