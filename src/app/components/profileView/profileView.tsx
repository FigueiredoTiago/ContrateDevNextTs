import Link from "next/link";
import styles from "./styles.module.css";
import location from "../../../../public/assets/img/icons/location.svg";
import linkedin from "../../../../public/assets/img/icons/linkedin.svg";
import github from "../../../../public/assets/img/icons/github.svg";
import email from "../../../../public/assets/img/icons/email.svg";
import whatsapp from "../../../../public/assets/img/icons/whatsapp.svg";

import { Profile } from "../../types/Profile";

import Image from "next/image";

type ProfileViewProps = {
  profile: Profile;
};

const profileView = ({ profile }: ProfileViewProps) => {
  return (
    <section className={styles.profile_section}>
      <section className={styles.side_information}>
        <div className={styles.profile_photo}>
          <img src={profile.avatarUrl} alt="Foto de perfil" />
        </div>

        <div className={styles.social_box}>
          <Link href={"#"} target="_blank" className={styles.social_link}>
            {" "}
            <Image src={location} alt="icone location" />
            {profile.city}
          </Link>
          <Link
            href={profile.linkedinUrl}
            target="_blank"
            className={styles.social_link}
          >
            {" "}
            <Image src={linkedin} alt="icone linkedin" /> Linkedin
          </Link>
          <Link
            href={profile.githubUrl}
            target="_blank"
            className={styles.social_link}
          >
            {" "}
            <Image src={github} alt="icone github" /> Github
          </Link>
          <Link
            href={profile.email}
            target="_blank"
            className={styles.social_link}
          >
            {" "}
            <Image src={email} alt="icone email" /> {profile.email}
          </Link>
          <Link href={"#"} target="_blank" className={styles.social_link}>
            {" "}
            <Image src={whatsapp} alt="icone whatsapp" /> {profile.phone}
          </Link>
        </div>
      </section>

      <section className={styles.main_information}>
        <div className={styles.name_box}>
          <h1 className={styles.name}>{profile.name}</h1>
          <h2 className={styles.main_stack}>{profile.mainStack}</h2>
        </div>

        <section className={styles.about_information}>
          <h2 className={styles.info}>SOBRE:</h2>

          <p className={styles.bio}>{profile.about}</p>
        </section>

        <section className={styles.skills_box}>
          <h2 className={styles.info}>HABILIDADES:</h2>

          <div className={styles.skills_bubbles}>
            {profile &&
              profile.stacks.map((stack) => (
                <div key={stack} className={styles.bubble}>
                  <p>{stack}</p>
                </div>
              ))}
          </div>
        </section>
      </section>
    </section>
  );
};

export default profileView;
