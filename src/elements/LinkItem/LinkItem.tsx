import React from "react";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import styles from "./LinkItem.module.scss";
import { LinkItemProps } from "./LinkItem.props";

export const LinkItem = ({
  href,
  icon,
  children,
  className,
}: LinkItemProps) => {
  return (
    <>
      {icon ? (
        <Link className={cn(className, styles.wrapper)} href={href}>
          {children}
          <div className={styles.icon}>
            <Image width={20} height={20} src={`/${icon}`} alt="Иконка" />
          </div>
        </Link>
      ) : (
        <Link className={cn(className, styles.wrapper)} href={href}>
          {children}
        </Link>
      )}
    </>
  );
};
