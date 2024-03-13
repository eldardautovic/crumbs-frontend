import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

import CrumbsList from "@/components/ui/CrumbsList/CrumbsList";
import PageHeader from "@/components/ui/PageHeader";
import apiClient from "@/lib/axios";
import { Crumb } from "@/types/crumbs/crumbs";
import { ResponseData } from "@/types/response/response";

const inter = Inter({ subsets: ["latin"] });

const Crumbs: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ crumbs }) => {
  return (
    <>
      <Head>
        <title>Crumbs | Groups</title>
      </Head>
      <main className={`${inter.className}`}>
        <PageHeader
          title="Crumbs"
          description="Delve into our crumb-tastic collection for a taste of intrigue!"
        />
        <CrumbsList crumbs={crumbs} />
      </main>
    </>
  );
};

export const getServerSideProps = (async () => {
  const { data } = await apiClient.get<ResponseData<Crumb[]>>("/group/index");

  return { props: { crumbs: data.data } };
}) satisfies GetServerSideProps<{ crumbs: Crumb[] }>;

Crumbs.activeLayout = "Default";

export default Crumbs;
