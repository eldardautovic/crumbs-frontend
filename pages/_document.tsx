import { Head, Html, Main, NextScript } from "next/document";

import { Toaster } from "@/components/ui/toaster";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-gray-900 bg-gray-100 ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
