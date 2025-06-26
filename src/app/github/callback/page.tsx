"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function GithubCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleGithubLogin = async () => {
      const url = new URL(window.location.href);

      const code = url.searchParams.get("code");

      try {
        const response = await axios.post("http://localhost:3333/auth/login", {
          code,
        });
        const { user } = response.data;
        console.log("Usuário autenticado:", user);
        console.log("Respopsta da Response:", response.data); //salvar token nos cokies aqui
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
  }, [router]);

  return <p>Autenticando com o GitHub...</p>;
}
