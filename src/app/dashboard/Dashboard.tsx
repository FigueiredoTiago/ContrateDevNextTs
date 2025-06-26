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

      {/* transformar essa sessao em um componente pois deve ter logica de filtragem */}

      {isLoading ? (
        <span className={styles.loader}></span>
      ) : (
        <section className={styles.cardContent}>
          {data && data.length > 0 ? (
            data.map((profileData) => (
              <ProfileCard key={profileData.id} profile={profileData} />
            ))
          ) : (
            <p className={styles.info}>{error?.message}</p>
          )}
        </section>
      )}
    </main>
  );
};

export default Dashboard;
