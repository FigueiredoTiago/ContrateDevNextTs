"use client";
import styles from "./styles.module.css";
import ProfileCard from "../components/profileCard/ProfileCard";
import Modalprofile from "../components/ModalProfile/Modalprofile";

import { getProfiles } from "../services/api";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profiles"],
    queryFn: getProfiles,
  });

  if (isLoading) {
    return <span className="loader"></span>;
  }
  return (
    <main className={styles.container}>
      <header className={styles.mainHeader}>
        <h1 className={styles.title}>
          Encontre desenvolvedores prontos para o seu próximo projeto
        </h1>
        <p className={styles.subtitle}>
          Explore perfis técnicos filtrando por stack, senioridade e
          localização. Todos os devs aqui estão abertos a novas oportunidades.
        </p>

        {/* substituir pelo botao modal de criar conta , caso esteja logado vira  o modal de criar ou Editar perfil */}

        <Modalprofile />
      </header>

      <section className={styles.cardContent}>
        <ProfileCard />

        {data &&
          data.map((profile) => <h1 key={profile.id}>{profile.name}</h1>)}
      </section>
    </main>
  );
};

export default Dashboard;
