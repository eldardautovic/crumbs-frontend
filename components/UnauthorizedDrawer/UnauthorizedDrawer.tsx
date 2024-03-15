"use client";

import Link from "next/link";
import { useRouter } from "next/router";

import useAuth from "@/hooks/useAuth";

import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";

const UnauthorizedDrawer = () => {
  const router = useRouter();

  const { user, isLoading } = useAuth();

  return (
    <div>
      <Drawer open={!user && !isLoading} dismissible={false}>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Whoops, seems you are not logged in.</DrawerTitle>
              <DrawerDescription>Sign in to get access</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button onClick={() => router.push("/login")}>Sign in</Button>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-1/2 border-t border-gray-200 dark:border-gray-800" />
                <p className="text-sm text-gray-500 dark:text-gray-400">OR</p>
                <div className="w-1/2 border-t border-gray-200 dark:border-gray-800" />
              </div>
              <Button
                variant="outline"
                onClick={() => router.push("/register")}
              >
                Sign up
              </Button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default UnauthorizedDrawer;
