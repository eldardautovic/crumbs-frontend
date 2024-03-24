import { NextPage } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

import ProfileForm from "@/components/ProfileForm/ProfileForm";
import PageHeader from "@/components/ui/PageHeader";
import Spinner from "@/components/ui/Spinner";
import useAuth from "@/hooks/useAuth";

const inter = Inter({ subsets: ["latin"] });

const Profile: NextPage = () => {
  const { isLoading, user } = useAuth();

  return (
    <>
      <Head>
        <title>Crumbs | Settings</title>
      </Head>
      <main className={`${inter.className}`}>
        <PageHeader
          title="Settings."
          description="Here you can change and view your user profile."
        />
        {!isLoading && user ? (
          <ProfileForm />
        ) : (
          <div className="mt-5">
            <Spinner />
          </div>
        )}
      </main>
    </>
  );
};

Profile.activeLayout = "Default";

export default Profile;
