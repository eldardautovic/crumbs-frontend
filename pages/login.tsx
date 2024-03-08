import IconLogo from "@/components/Icons/IconLogo/IconLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { NextPage } from "next";

import Head from "next/head";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crumbs | Login</title>
      </Head>
      <main>
        <section className="flex justify-center gap-x-32 items-center min-h-[90vh]">
          <div>
            <span className="dark:fill-gray-400 fill-gray-600">
              <IconLogo width={400} />
            </span>
          </div>
          <div className="flex items-center min-h-[400px] px-6 xl:px-10">
            <div className="hidden border-r lg:flex" />
            <div className="mx-auto flex-1 space-y-6 max-w-[400px]">
              <div className="space-y-2">
                <div className="space-y-2">
                  <h1 className="text-7xl font-black dark:text-gray-100 text-orange-400">
                    crumbs.
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    Delicious links
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="m@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <Button className="w-full">Sign in</Button>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-1/2 border-t border-gray-200 dark:border-gray-800" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">OR</p>
                  <div className="w-1/2 border-t border-gray-200 dark:border-gray-800" />
                </div>
                <Button className="w-full" variant="outline">
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

Login.activeLayout = "Blank";

export default Login;
