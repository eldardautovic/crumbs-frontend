"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import Link from "next/link";

import useAuth from "@/hooks/useAuth";
import apiClient from "@/lib/axios";
import { LoginUser, LoginUserResponse } from "@/types/auth/auth";
import { ResponseData } from "@/types/response/response";

import IconLogo from "../Icons/IconLogo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm<LoginUser>();
  const { authenticateUser } = useAuth();

  const onSubmit = async (data: LoginUser) => {
    try {
      setLoading(true);

      const response = await apiClient.post<ResponseData<LoginUserResponse>>(
        "/login",
        data
      );

      if (response) {
        await authenticateUser(response.data.data.token);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
                <Input
                  id="email"
                  placeholder="m@example.com"
                  type="email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password", { required: true })}
                />
              </div>
              <Button className="w-full" type="submit" disabled={loading}>
                Sign in
              </Button>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-1/2 border-t border-gray-200 dark:border-gray-800" />
                <p className="text-sm text-gray-500 dark:text-gray-400">OR</p>
                <div className="w-1/2 border-t border-gray-200 dark:border-gray-800" />
              </div>
              <div className={clsx({ "pointer-events-none": loading })}>
                <Link href="/register">
                  <Button
                    className="w-full"
                    variant="outline"
                    disabled={loading}
                  >
                    Sign up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default LoginForm;
