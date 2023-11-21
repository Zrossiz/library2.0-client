import React from "react";
import styles from "./Navigation.module.scss";
import { LinkItem } from "@/elements";

export const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <LinkItem href="/books">Все книги</LinkItem>
      <LinkItem href="/books/create">Загрузить</LinkItem>
      <LinkItem href="/books/search" icon="img/glass.svg">
        Найти
      </LinkItem>
    </nav>
  );
};
