import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Header.module.scss";
import { Navigation } from "@/components";
import { fadeIn } from "@/helpers/variants";
import { LinkButton } from "@/elements";

export const Header = () => {
  return (
    <header className={styles.header}>
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className={styles.wrapper}
      >
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={"/img/logo.svg"}
              width={60}
              height={60}
              alt="Express библиотека"
            />
          </Link>
        </div>
        <div className={styles.nav}>
          <Navigation />
        </div>
        <LinkButton href="/login" className={styles.login}>
          Войти
        </LinkButton>
      </motion.div>
    </header>
  );
};
