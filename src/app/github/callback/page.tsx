"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function GithubCallback() {
  const router = useRouter();

  const url = new URL(window.location.href);

  const code = url.searchParams.get("code");

  const queryClient = useQueryClient();

  //salvar as informacoes de login usando o reack query
  const { data, isLoading } = useQuery({
    queryKey: ["loginAuth"],
    queryFn: async () => {
      const profileResponse = await axios.post(
        "http://localhost:3333/auth/login",
        {
          code,
        }
      );
      return profileResponse.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutos
    retry: false,
  });

  useEffect(() => {
    const handleGithubLogin = async () => {
      try {
        console.log("Dados do fetch de login ", data);

        const { user, token } = data;

        Cookies.set("token", token, { expires: 1 });

        Cookies.set("id", user.id, { expires: 1 });

        Cookies.set("userName", user.name, { expires: 1 });

        Cookies.set("avatarUrl", user.avatarUrl, { expires: 1 });

        queryClient.setQueryData(["loginAuth"], {
          user,
          token,
        });

        router.push("/");
      } catch (error: any) {
        if (error.response) {
          // Resposta do servidor com código de erro
          console.error(
            "Erro na resposta da API:",
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          // Requisição feita, mas sem resposta
          console.error("Erro na requisição, sem resposta:", error.request);
        } else {
          // Outro erro
          console.error("Erro desconhecido:", error.message);
        }
      }
    };

    handleGithubLogin();
  }, [router, data, code, queryClient]);

  if (isLoading) {
    return <p>Autenticando com o GitHub...</p>;
  }

  return;
}
