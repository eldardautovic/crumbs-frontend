import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Spinner from "@/components/ui/Spinner";
import { useToast } from "@/hooks/useToast";
import apiClient from "@/lib/axios";
import { ResponseData } from "@/types/response/response";
import { User, VerifyUser } from "@/types/user/user";

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  getUserProfile: () => Promise<void>;
  authenticateUser: (token: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { toast } = useToast();

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
    getUserProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserProfile = async () => {
    let isAuthenticated = false;
    try {
      const { data } = await apiClient.get<ResponseData<VerifyUser>>("/user");
      setUser(data.data.user);
      isAuthenticated = true;
      if (
        router.pathname.includes("login") ||
        (router.pathname.includes("register") && data)
      ) {
        router.push("/");
      }
    } catch (err) {
      delete apiClient.defaults.headers.common["Authorization"];
    } finally {
      setIsLoading(false);
    }
  };

  const authenticateUser = async (token: string) => {
    try {
      await localStorage.setItem("token", token);
      apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
      await getUserProfile();
      router.push("/");
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    await apiClient.post("/user/logout");
    delete apiClient.defaults.headers.common.Authorization;
    localStorage.removeItem("token");
    setUser(null);
    await router.push("/login");
    toast({ title: "Logged out", description: "Successfully logged out." });
  };

  // if (isLoading) {
  //   return <Spinner />;
  // }
  return (
    <AuthContext.Provider
      value={{
        user,
        getUserProfile,
        authenticateUser,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
