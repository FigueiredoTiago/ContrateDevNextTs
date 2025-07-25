import styles from "./styles.module.css";
import ProfileView from "../../components/profileView/profileView";
import { getProfileId } from "../../services/api";

type Props = {
  params: {
    id: string;
  };
};

const Profile = async ({ params }: Props) => {
  const profile = await getProfileId(params.id);

  return (
    <section className={styles.container}>
      <ProfileView profile={profile} />
    </section>
  );
};

export default Profile;
