import { useEffect, useState } from "react";
import Cookies from "js-cookie";

type UserData = {
  userName: string;
  token: string;
  avatarUrl?: string;
};

export function isAuth() {
  const [user, setUser] = useState<UserData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    const userName = Cookies.get("userName");
    const avatarUrl = Cookies.get("avatarUrl");

    if (token && userName) {
      setUser({ token, userName, avatarUrl });
      setIsAuthenticated(true);
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }
  }, []);

  return { isAuthenticated, user };
}
