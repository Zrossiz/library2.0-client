import { Montserrat } from "next/font/google";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const LoginPage = () => {
  return <div className={inter.className}>LoginPage</div>;
};

export default LoginPage;
