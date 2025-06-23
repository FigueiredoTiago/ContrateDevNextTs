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

      if (code) {
        try {
          const response = await axios.post(
            "http://localhost:3333/auth/login",
            {
              code,
            }
          );
          console.log(code);
          const user = response.data;
          console.log("Usuário autenticado:", user);

          // Ex: salvar user no localStorage ou redirecionar
          // localStorage.setItem("user", JSON.stringify(user));
          router.push("/");
        } catch (error) {
          console.error("Erro ao autenticar com o GitHub", error);
        }
      }
    };

    handleGithubLogin();
  }, [router]);

  return <p>Autenticando com o GitHub...</p>;
}
