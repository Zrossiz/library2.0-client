import { Montserrat } from "next/font/google";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const RegistrationPage = () => {
  return <div className={inter.className}>RegistrationPage</div>;
};

export default RegistrationPage;
