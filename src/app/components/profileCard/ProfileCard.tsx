import Image from "next/image";
import styles from "./styles.module.css";
import Linkedin from "../../../../public/assets/img/linkedin.svg";
import Github from "../../../../public/assets/img/github.svg";
import Location from "../../../../public/assets/img/location.svg";

import { Profile } from "@/app/types/Profile";

type ProfileCardProps = {
  profile: Profile;
};

const ProfileCard = ({ profile }: ProfileCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.photo}>
        <img src={profile.avatarUrl} alt="perfil imagem" />
      </div>

      <div className={styles.info}>
        <p className={styles.stacks}>{profile.stacks}</p>
        <h2 className={styles.name}>{profile.name}</h2>
        <p className={styles.mainStack}>{profile.mainStack}</p>
      </div>

      <div className={styles.social}>
        <p className={styles.socialLocation}>
          {" "}
          <Image src={Location} alt="Gps logo" /> {profile.city}
        </p>{" "}
        <a href={profile.githubUrl} className={styles.socialItem}>
          <Image src={Github} alt="github logo" />
        </a>
        <a href={profile.linkedinUrl} className={styles.socialItem}>
          <Image src={Linkedin} alt="linkedin logo" />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
