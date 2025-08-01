import styles from "./styles.module.css";
import ProfileView from "../../components/profileView/profileView";
import Link from "next/link";

const ProfilePage = ({ params }: { params: { id: string } }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        {" "}
        <Link href={"/"}>contrate.dev</Link> apresenta: Um candidato preparado
        para agregar valor à sua equipe. Analise o perfil, avalie a experiência
        e faça contato para avançar na contratação.{" "}
      </h1>

      <ProfileView id={params.id} />
    </section>
  );
};

export default ProfilePage;
