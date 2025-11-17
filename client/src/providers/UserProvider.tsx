"use client";

import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from "react";
import { axiosDeliveryInstance } from "@/lib/axios-delivery-instance";

type User = {
  _id?: string;
  email: string;
  address?: string;
  role?: string;
  isVerified?: boolean;
};

type UserType = {
  user: User | null;
  userLoginHandler: (email: string, password: string) => Promise<void>;
  setUser: Dispatch<SetStateAction<User | null>>;
  logout: () => void;
  isLoading: boolean;
};

const UserContext = createContext<UserType>({} as UserType);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const userLoginHandler = async (email: string, password: string) => {
    const response = await axiosDeliveryInstance.post("/auth/sign-in", {
      email,
      password,
    });

    const { token, user: userData } = response.data;

    if (token) {
      localStorage.setItem("token", token);
      setUser(userData);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axiosDeliveryInstance
        .get("/auth/refresh-user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const { refreshToken } = response.data;
          if (refreshToken) {
            localStorage.setItem("token", refreshToken);
          }
        })
        .catch(() => {
          localStorage.removeItem("token");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, userLoginHandler, setUser, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
