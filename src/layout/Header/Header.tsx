import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styles from "./Header.module.scss";
import { Navigation } from "@/components";
import { fadeIn } from "@/helpers/variants";
import { LinkButton } from "@/elements";

export const Header = () => {
  const login = false;
  const router = useRouter();
  return (
    <header className={styles.header}>
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        animate="show"
        className={styles.wrapper}
      >
        <div className={styles.logo}>
          {router.asPath === "/" ? (
            <Image
              src={"/img/logo.svg"}
              width={60}
              height={60}
              alt="Express библиотека"
            />
          ) : (
            <Link href="/">
              <Image
                src={"/img/logo.svg"}
                width={60}
                height={60}
                alt="Express библиотека"
              />
            </Link>
          )}
        </div>
        <div className={styles.nav}>
          <Navigation />
        </div>
        {login ? (
          <div className={styles.loginWrapper}>
            <div className={styles.avatarWrapper}>
              <Image
                src={"/img/default-avatar.svg"}
                height={56}
                width={56}
                alt="Аватар"
              />
            </div>
            <div>Username</div>
          </div>
        ) : (
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <LinkButton href="/login" className={styles.login}>
              Войти
            </LinkButton>
          </motion.div>
        )}
      </motion.div>
    </header>
  );
};
