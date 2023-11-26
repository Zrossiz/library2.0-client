import Image from "next/image";
import cn from "classnames";
import { Montserrat } from "next/font/google";
import styles from "../styles/Login.module.scss";
import { Htag, LinkItem } from "@/elements";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const LoginPage = () => {
  return (
    <div className={cn(inter.className, styles.loginPageWrapper)}>
      <div className={styles.wrapper}>
        <div className={styles.welcomeWrapper}>
          <Htag tag="h2">Welcome!</Htag>
          <div className={styles.logoWrapper}>
            <LinkItem href="/">
              <Image
                src="/img/logo.svg"
                width={240}
                height={240}
                alt="Логотип"
              />
            </LinkItem>
          </div>
          <div className={styles.linkWrapper}>
            <LinkItem bordered href="/registration">
              Еще не зарегистрированы?
            </LinkItem>
          </div>
        </div>
        <div className={styles.formWrapper}>
          <Htag tag="h2">Войдите в аккаунт</Htag>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
