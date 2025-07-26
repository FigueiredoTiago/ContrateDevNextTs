"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";

type UserData = {
  name: string;
  login: string;
  avatarUrl?: string;
  id: string;
};

type LoginAuthResponse = {
  message: string;
  token: string;
  user: UserData;
};

export function useAuth() {
  const queryClient = useQueryClient();

  const { data } = useQuery<LoginAuthResponse>({
    queryKey: ["loginAuth"],
    queryFn: async () => {
      const cachedData = queryClient.getQueryData<LoginAuthResponse>([
        "loginAuth",
      ]);
      return cachedData ?? Promise.reject("No user logged in");
    },
    staleTime: 0,
    refetchOnWindowFocus: false,
    enabled: true,
  });

  const user = data?.user ?? null;
  const isAuthenticated = !!user;

  return { isAuthenticated, user };
}
