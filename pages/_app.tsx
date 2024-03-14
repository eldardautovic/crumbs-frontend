import { lazy } from "react";
import type { AppLayoutProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Pusher from "pusher-js";

import { Toaster } from "@/components/ui/toaster";
import { LayoutName, Layouts } from "@/layouts";

import "@/styles/globals.css";

const LazyAuthProvider = lazy(() => import("@/context/AuthContext"));

export default function App({ Component, pageProps }: AppLayoutProps) {
  const CurrentLayout =
    Layouts[(Component.activeLayout as LayoutName) ?? "Default"];

  const getLayout = (children: React.ReactNode) => (
    <CurrentLayout>{children}</CurrentLayout>
  );

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LazyAuthProvider>
        {getLayout(<Component {...pageProps} />)}
        <Toaster />
      </LazyAuthProvider>
    </ThemeProvider>
  );
}
