import { NextPage } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

import PageHeader from "@/components/ui/PageHeader";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crumbs | Home</title>
      </Head>
      <main className={`${inter.className}`}>
        <PageHeader
          title="Whoops! Looks like you're not part of any crumbs yet."
          description="Dive into the crumbverse for a slice of the action!"
        />
      </main>
    </>
  );
};

Home.activeLayout = "Default";

export default Home;
