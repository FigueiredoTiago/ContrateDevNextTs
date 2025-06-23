import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/assets/img/logo.svg";
import ModalLogin from "../ModalLogin/ModalLogin";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <nav className={styles.logoContent}>
        <Image src={Logo} alt="logo" />
        <Link className={styles.logo} href={"/"}>
          contrate.dev
        </Link>
      </nav>

      <ModalLogin />
    </header>
  );
};

export default Navbar;
