import { Inter } from "next/font/google";
import { withLayout } from "@/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return <div>Home</div>;
};

export default withLayout(Home);
