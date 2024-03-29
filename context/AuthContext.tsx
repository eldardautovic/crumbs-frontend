import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import pusherJs from "pusher-js";

import Notification from "@/components/Notification/Notification";
import { useToast } from "@/hooks/useToast";
import apiClient from "@/lib/axios";
import { Notification as NotificationType } from "@/types/notifications/notifications";
import { ResponseData } from "@/types/response/response";
import { User } from "@/types/user/user";

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  getUserProfile: () => Promise<void>;
  getUserNotifications: () => Promise<void>;
  authenticateUser: (token: string) => Promise<void>;
  logout: () => void;
  notifications: NotificationType[];
}

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { toast } = useToast();

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
    getUserProfile();
    getUserNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserProfile = async () => {
    let isAuthenticated = false;
    try {
      const { data } = await apiClient.get<ResponseData<User>>("/user");
      setUser(data.data);

      isAuthenticated = true;
      if (
        router.pathname.includes("login") ||
        (router.pathname.includes("register") && data.data)
      ) {
        router.push("/");
      }
      const pusher = new pusherJs("787aa887151da6af2ade", {
        cluster: "eu",
        forceTLS: false,
        authEndpoint:
          process.env.NEXT_PUBLIC_API_URL + "/api/broadcasting/auth",
        auth: {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            Accept: "application/json",
          },
        },
      });

      const channel = pusher.subscribe("private-user." + data.data.id);

      channel.bind(
        "Illuminate\\Notifications\\Events\\BroadcastNotificationCreated",
        (response: any) => {
          toast({
            action: <Notification user={data.data} response={response} />,
          });
          getUserNotifications();
        }
      );
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

  const getUserNotifications = async () => {
    try {
      const { data } = await apiClient.get<{ data: NotificationType[] }>(
        "/notifications?perPage=5",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      setNotifications(data.data);
    } catch (err) {
      console.error(err);
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

  return (
    <AuthContext.Provider
      value={{
        user,
        getUserProfile,
        getUserNotifications,
        authenticateUser,
        logout,
        isLoading,
        notifications,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
