import { Inter } from "next/font/google";
import Head from "next/head";

import NotificationList from "@/components/ui/NotificationPage/NotificationList/NotificationList";
import PageHeader from "@/components/ui/PageHeader";

const inter = Inter({ subsets: ["latin"] });

const Notifications = () => {
  return (
    <>
      <Head>
        <title>Crumbs | Notifications</title>
      </Head>
      <main className={`${inter.className} h-[70vh]`}>
        <PageHeader
          title="Notifications"
          description="Uncover your personalized notification page, your gateway to staying informed with messages sent directly to you!"
        />
        <NotificationList />
      </main>
    </>
  );
};

Notifications.activeLayout = "Default";

export default Notifications;
