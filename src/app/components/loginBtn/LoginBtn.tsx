"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import githubIcon from "../../../../public/assets/img/github.svg";

export default function LoginBtn() {
  const githubClientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;

  const redirectToGithub = () => {
    const redirectUri = "http://localhost:3000/github/callback";
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${githubClientId}&redirect_uri=${redirectUri}`;
    window.location.href = githubAuthUrl;
  };

  return (
    <button className={styles.loginBtn} onClick={redirectToGithub}>
      <Image src={githubIcon} alt="Icone Git hub" width={32} /> Entrar com
      GitHub
    </button>
  );
}
