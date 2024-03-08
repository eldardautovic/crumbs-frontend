import { Inter } from "next/font/google";

import { NextPage } from "next";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return <main className={`${inter.className}`}></main>;
};

Home.activeLayout = "Default";

export default Home;
