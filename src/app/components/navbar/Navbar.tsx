"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/assets/img/logo.svg";
import ModalLogin from "../ModalLogin/ModalLogin";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { logout } from "@/app/services/logOut";

const Navbar = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const name = Cookies.get("userName");
    if (name) {
      setUserName(name);
    }
  }, []);

  return (
    <header className={styles.navbar}>
      <nav className={styles.logoContent}>
        <Image src={Logo} alt="logo" />
        <Link className={styles.logo} href={"/"}>
          contrate.dev
        </Link>
      </nav>

      <div className={styles.boxBtn}>
        {userName ? (
          <p className={styles.userName}>{userName}</p>
        ) : (
          <ModalLogin />
        )}
        {userName && (
          <button onClick={logout} className={styles.logOutBtn}>
            sair
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
