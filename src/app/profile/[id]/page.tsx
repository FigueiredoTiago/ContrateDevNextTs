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
      <ProfileView id={params.id} />
    </section>
  );
};

export default ProfilePage;
