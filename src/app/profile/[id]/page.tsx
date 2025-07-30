import styles from "./styles.module.css";
import ProfileView from "../../components/profileView/profileView";

type Props = {
  params: {
    id: string;
  };
};

const ProfilePage = ({ params }: Props) => {
  return (
    <section className={styles.container}>

      <h1 className={styles.title}> <a href="/">contrate.dev</a> apresenta:
Um candidato preparado para agregar valor à sua equipe. Analise o perfil, avalie a experiência e faça contato para avançar na contratação.  </h1>

      <ProfileView id={params.id} />
    </section>
  );
};

export default ProfilePage;
