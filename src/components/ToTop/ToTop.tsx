import Image from "next/image";
import cn from "classnames";
import styles from "./ToTop.module.scss";
import { useScrollY } from "@/hooks/useScrollY";

export const ToTop = () => {
  const y = useScrollY();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
      <div
        onClick={() => scrollToTop()}
        className={cn(styles.wrapper, {
          ["hidden"]: y < 100,
        })}
      >
        <Image src={'/img/arrow-top.svg'} width={30} height={30} alt="Наверх" />
      </div>
  );
};
