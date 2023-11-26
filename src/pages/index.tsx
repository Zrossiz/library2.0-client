import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/helpers/variants";
import styles from "../styles/Home.module.scss";
import { withLayout } from "@/layout/Layout";
import { Htag, Span } from "@/elements";
import { LinkItem } from "@/elements";

const Home = () => {
  return (
    <>
      <div className={styles.backgroundWrapper}>
        <Image src={"/img/library-main.png"} alt="Фон" fill />
      </div>
      <div className={styles.wrapper}>
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          animate="show"
          className={styles.title}
        >
          <Htag className={styles.mainTitle} tag="h1">
            Тут читают
          </Htag>
          <Span color="white">Все ваши книги в одном месте</Span>
          <div className={styles.pointerWrapper}>
            <div className={styles.pointer}>
              <Link href="/books">
                <Image
                  src="/img/arrow-top.svg"
                  width={32}
                  height={32}
                  alt="Далее"
                />
              </Link>
            </div>
          </div>
        </motion.div>
        <LinkItem href="/services">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.services}
          >
            Узнать подробнее о проекте
          </motion.div>
        </LinkItem>
      </div>
    </>
  );
};

export default withLayout(Home);
