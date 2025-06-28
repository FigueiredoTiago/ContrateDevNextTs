// utils/logout.ts
"use client";

import Cookies from "js-cookie";

export function logout() {
  Cookies.remove("token");
  Cookies.remove("userName");
  Cookies.remove("avatarUrl");

  window.location.href = "/";
}
