import dynamic from "next/dynamic";

import ParallelSidebar from "@/components/ui/ParallelSidebar";
import SideBar from "@/components/ui/SideBar";
import UnauthorizedDrawer from "@/components/UnauthorizedDrawer/UnauthorizedDrawer";

const Navbar = dynamic(() => import("@/components/ui/NavBar"), { ssr: false });

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-2/4 mx-auto">
      <Navbar />
      <div className="flex gap-x-2 items-start">
        <SideBar />
        <div className="grow">{children}</div>
        <div className="flex-none w-[15%]">
          <ParallelSidebar />
        </div>
      </div>
      <UnauthorizedDrawer />
    </main>
  );
}
