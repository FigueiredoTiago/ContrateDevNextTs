import Image from "next/image";
import styles from "./styles.module.css";
import Linkedin from "../../../../public/assets/img/linkedin.svg";
import Github from "../../../../public/assets/img/github.svg";
import Location from "../../../../public/assets/img/location.svg";

const ProfileCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.photo}>
        <img
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
          alt="perfil imagem"
        />
      </div>

      <div className={styles.info}>
        <p className={styles.stacks}>React, NodeJS, Typescript</p>
        <h2 className={styles.name}>Tiago Figueiredo</h2>
        <p className={styles.mainStack}>SR.FullStack</p>
      </div>

      <div className={styles.social}>
        <span className={styles.sociallocation}>
          {" "}
          <Image src={Location} alt="Gps logo" /> Natal-RN
        </span>{" "}
        <a href="#" className={styles.socialItem}>
          <Image src={Github} alt="github logo" />
        </a>
        <a href="#" className={styles.socialItem}>
          <Image src={Linkedin} alt="linkedin logo" />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
