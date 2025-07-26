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

  // Usa o useQuery para tornar reativo
  const { data } = useQuery<LoginAuthResponse>({
    queryKey: ["loginAuth"],
    queryFn: async () => {
      // Não faz uma chamada real — apenas retorna o cache atual
      // Isso evita um fetch desnecessário
      const cachedData = queryClient.getQueryData<LoginAuthResponse>([
        "loginAuth",
      ]);
      return cachedData ?? Promise.reject("No user logged in");
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    enabled: true, // Mantém o hook ativo
  });

  const user = data?.user ?? null;
  const isAuthenticated = !!user;

  return { isAuthenticated, user };
}
