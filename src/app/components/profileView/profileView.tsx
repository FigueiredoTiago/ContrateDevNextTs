import Link from "next/link";
import styles from "./styles.module.css";
import location from "../../../../public/assets/img/icons/location.svg";
import linkedin from "../../../../public/assets/img/icons/linkedin.svg";
import github from "../../../../public/assets/img/icons/github.svg";
import email from "../../../../public/assets/img/icons/email.svg";
import whatsapp from "../../../../public/assets/img/icons/whatsapp.svg";

import Image from "next/image";

const profileView = () => {
  return (
    <section className={styles.profile_section}>
      <section className={styles.side_information}>
        <div className={styles.profile_photo}></div>

        <div className={styles.social_box}>
          <Link href={"#"} className={styles.social_link}>
            {" "}
            <Image src={location} alt="icone location" /> Natal-RN
          </Link>
          <Link href={"#"} className={styles.social_link}>
            {" "}
            <Image src={linkedin} alt="icone linkedin" /> Linkedin
          </Link>
          <Link href={"#"} className={styles.social_link}>
            {" "}
            <Image src={github} alt="icone github" /> Github
          </Link>
          <Link href={"#"} className={styles.social_link}>
            {" "}
            <Image src={email} alt="icone email" /> Email.com
          </Link>
          <Link href={"#"} className={styles.social_link}>
            {" "}
            <Image src={whatsapp} alt="icone whatsapp" /> (88) 98877-9900
          </Link>
        </div>
      </section>

      <section className={styles.main_information}>
        <div className={styles.name_box}>
          <h1 className={styles.name}>Tiago Figueiredo</h1>
          <h2 className={styles.main_stack}> SR.Backend</h2>
        </div>

        <section className={styles.about_information}>
          <h2 className={styles.info}>SOBRE:</h2>

          <p className={styles.bio}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            dignissimos ad autem. Blanditiis, saepe in dignissimos omnis
            pariatur nulla facilis autem, dolore beatae sunt qui praesentium
            aperiam ipsam repellendus doloremque?
          </p>
        </section>

        <section className={styles.skills_box}>
          <h2 className={styles.info}>HABILIDADES:</h2>

          <div className={styles.skills_bubbles}>
            <div className={styles.bubble}>
              <p>react</p>
            </div>
            <div className={styles.bubble}>
              <p>react</p>
            </div>
            <div className={styles.bubble}>
              <p>react</p>
            </div>
            <div className={styles.bubble}>
              <p>react</p>
            </div>
            <div className={styles.bubble}>
              <p>react</p>
            </div>
            <div className={styles.bubble}>
              <p>react</p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default profileView;
