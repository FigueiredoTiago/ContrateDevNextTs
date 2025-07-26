"use client";
import styles from "./styles.module.css";
import ProfileCard from "../components/profileCard/ProfileCard";
import Modalprofile from "../components/ModalProfile/Modalprofile";
import ModalLogin from "../components/ModalLogin/ModalLogin";

import { getProfiles } from "../services/api";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profiles"],
    queryFn: getProfiles,
  });

  const { isAuthenticated, user } = useAuth();

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

        {isAuthenticated ? (
          <Modalprofile />
        ) : (
          <div style={{ backgroundColor: "#252525" }}>
            <ModalLogin />
          </div>
        )}
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
