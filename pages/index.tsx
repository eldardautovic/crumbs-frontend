import { NextPage } from "next";
import { Inter } from "next/font/google";

import UnauthorizedDrawer from "@/components/UnauthorizedDrawer/UnauthorizedDrawer";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <main className={`${inter.className}`}>
      {" "}
      Elcic mafija
      <UnauthorizedDrawer />
    </main>
  );
};

Home.activeLayout = "Default";

export default Home;
