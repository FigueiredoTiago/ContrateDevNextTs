"use client";

import Cookies from "js-cookie";
import { useQueryClient } from "@tanstack/react-query";

export function useLogout() {
  const client = useQueryClient();

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("userName");
    Cookies.remove("avatarUrl");
    Cookies.remove("id");

    client.invalidateQueries({ queryKey: ["loginAuth"] });
    window.location.href = "/";
  };

  return logout;
}
