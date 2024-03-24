import { NextPage } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

import PageHeader from "@/components/ui/PageHeader";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crumbs | Create</title>
      </Head>
      <main className={`${inter.className}`}>
        <PageHeader
          title="Create a new crumb."
          description="Dive into the crumbverse for a slice of the action!"
        />
      </main>
    </>
  );
};

Home.activeLayout = "Default";

export default Home;
