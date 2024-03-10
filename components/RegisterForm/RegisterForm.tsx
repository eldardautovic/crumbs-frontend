'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Label } from '@radix-ui/react-label';
import Link from 'next/link';

import useAuth from '@/hooks/useAuth';
import apiClient from '@/lib/axios';
import { RegisterUser, RegisterUserResponse } from '@/types/auth/auth';
import { ResponseData } from '@/types/response/response';

import IconLogo from '../Icons/IconLogo/IconLogo';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const { handleSubmit, register } = useForm<RegisterUser>();

  const { authenticateUser } = useAuth();

  const onSubmit = async (data: RegisterUser) => {
    try {
      setLoading(true);

      const response = await apiClient.post<ResponseData<RegisterUserResponse>>('/register', data);

      await authenticateUser(response.data.data.token);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="flex flex-row-reverse justify-center items-center min-h-[90vh]">
        <div>
          <span className="dark:fill-gray-400 fill-gray-600">
            <IconLogo width={400} />
          </span>
        </div>
        <div className="flex items-center min-h-[400px] px-6 xl:px-10 w-1/2">
          <div className="hidden border-r lg:flex" />
          <div className="mx-auto flex-1 space-y-6 max-w-[400px]">
            <div className="space-y-2">
              <div className="space-y-2">
                <h1 className="text-7xl font-black dark:text-gray-100 text-orange-400">crumbs.</h1>
                <p className="text-gray-500 dark:text-gray-400">Delicious links</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  type="text"
                  {...register('name', { required: true })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="john.doe"
                  type="text"
                  {...register('username', {
                    required: true,
                  })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  type="email"
                  {...register('email', { required: true })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register('password', {
                    required: true,
                  })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register('password_confirmation', {
                    required: true,
                  })}
                />
              </div>
              <Button
                className="w-full"
                disabled={loading}
              >
                Sign up
              </Button>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-1/2 border-t border-gray-200 dark:border-gray-800" />
                <p className="text-sm text-gray-500 dark:text-gray-400">OR</p>
                <div className="w-1/2 border-t border-gray-200 dark:border-gray-800" />
              </div>
              <div>
                <Link href="/login">
                  <Button
                    className="w-full"
                    variant="outline"
                    type="submit"
                    disabled={loading}
                  >
                    Sign in
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

export default RegisterForm;
