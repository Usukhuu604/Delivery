"use client";

import { useRouter } from "next/navigation";

export const useNavigate = () => {
  const router = useRouter();

  return (route: string) => {
    router.push(`/${route}`);
  };
};
