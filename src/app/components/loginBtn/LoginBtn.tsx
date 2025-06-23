"use client";

export default function LoginBtn() {
  const githubClientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;

  const redirectToGithub = () => {
    const redirectUri = "http://localhost:3000/github/callback";
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${githubClientId}&redirect_uri=${redirectUri}`;
    window.location.href = githubAuthUrl;
  };

  return <button onClick={redirectToGithub}>Entrar com GitHub</button>;
}
