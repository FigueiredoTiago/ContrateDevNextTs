import styles from "./styles.module.css";
import ProfileCard from "../components/profileCard/ProfileCard";
import Modalprofile from "../components/ModalProfile/Modalprofile";

const Dashboard = () => {
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
        
        <Modalprofile/>

      </header>

      <section className={styles.cardContent}>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </section>
    </main>
  );
};

export default Dashboard;
