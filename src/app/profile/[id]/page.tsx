import styles from "./styles.module.css";
import ProfileView from "../../components/profileView/profileView";
import { getProfileId } from "../../services/api";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const Profile = async ({ params }: Props) => {
  const profile = await getProfileId(params.id);

  if (!profile) {
    return notFound();
  }

  return (
    <section className={styles.container}>
      <ProfileView profile={profile} />
    </section>
  );
};

export default Profile;
