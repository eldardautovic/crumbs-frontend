import { LayoutName, Layouts } from "@/layouts";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppLayoutProps } from "next/app";

export default function App({ Component, pageProps }: AppLayoutProps) {
  const CurrentLayout =
    Layouts[(Component.activeLayout as LayoutName) ?? "Default"];

  const getLayout = (children: React.ReactNode) => (
    <CurrentLayout>{children}</CurrentLayout>
  );

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}
