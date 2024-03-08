"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/ui/NavBar"), { ssr: false });

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-1/2 mx-auto">
      <Navbar />
      {children}
    </main>
  );
}
