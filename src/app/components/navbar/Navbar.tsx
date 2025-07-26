"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/assets/img/logo.svg";
import ModalLogin from "../ModalLogin/ModalLogin";
import { logout } from "@/app/services/logOut";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <header className={styles.navbar}>
      <nav className={styles.logoContent}>
        <Image src={Logo} alt="logo" />
        <Link className={styles.logo} href={"/"}>
          contrate.dev
        </Link>
      </nav>

      <div className={styles.boxBtn}>
        {isAuthenticated ? (
          <>
            <p className={styles.userName}>{user?.name}</p>
            <button onClick={logout} className={styles.logOutBtn}>
              sair
            </button>
          </>
        ) : (
          <ModalLogin />
        )}
      </div>
    </header>
  );
};

export default Navbar;
