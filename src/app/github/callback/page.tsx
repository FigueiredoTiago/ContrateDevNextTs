"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function GithubCallback() {
  const router = useRouter();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const url = new URL(window.location.href);

  const code = url.searchParams.get("code");

  const queryClient = useQueryClient();

  //salvar as informacoes de login usando o reack query
  const { data, isLoading } = useQuery({
    queryKey: ["loginAuth"],
    queryFn: async () => {
      const profileResponse = await axios.post(`${apiUrl}/auth/login`, {
        code,
      });
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
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response) {
            console.error(
              "Erro na resposta da API:",
              error.response.status,
              error.response.data
            );
          } else if (error.request) {
            console.error("Erro na requisição, sem resposta:", error.request);
          } else {
            console.error("Erro desconhecido:", error.message);
          }
        } else {
          console.error("Erro não relacionado ao Axios:", error);
        }
      }
    };

    handleGithubLogin();
  }, [router, data, code, queryClient]);

  if (isLoading) {
    return (
      <p
        style={{
          height: "100vh",
          margin: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.5rem",
          fontWeight: "600",
          color: "#333",
          backgroundColor: "#f0f0f0",
        }}
      >
        Autenticando com o GitHub...
      </p>
    );
  }

  return;
}
