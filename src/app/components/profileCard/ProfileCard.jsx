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
          src="https://cdn.leonardo.ai/users/b7b016fb-3f5c-4989-b054-6c2714f8b6de/generations/0924fba0-5486-439e-995f-575857b5a6ba/Leonardo_Phoenix_10_A_sleek_highcontrast_professionally_design_0.jpg?w=512"
          alt="perfil imagem"
        />
      </div>

      <div className={styles.info}>
        <p className={styles.stacks}>React, NodeJS, Typescript</p>
        <h2 className={styles.name}>Tiago Figueiredo</h2>
        <p className={styles.mainStack}>SR.FullStack</p>
      </div>

      <div className={styles.social}>
        <p className={styles.socialLocation}>
          {" "}
          <Image src={Location} alt="Gps logo" /> Natal-RN
        </p>{" "}
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
