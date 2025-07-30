"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

import location from "../../../../public/assets/img/icons/location.svg";
import linkedin from "../../../../public/assets/img/icons/linkedin.svg";
import github from "../../../../public/assets/img/icons/github.svg";
import email from "../../../../public/assets/img/icons/email.svg";
import whatsapp from "../../../../public/assets/img/icons/whatsapp.svg";
import pdfIcon from "../../../../public/assets/img/icons/icone-pdf.svg";

import { getProfileId } from "../../services/api";
import { Profile } from "@/app/types/Profile";

import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { toast } from "react-toastify";

type Props = {
  id: string;
};

const ProfileView = ({ id }: Props) => {
  const {
    data: profile,
    isLoading,
    isError,
  } = useQuery<Profile | null>({
    queryKey: ["profileCv", id],
    queryFn: () => getProfileId(id),
  });

  const profileRef = useRef<HTMLDivElement>(null);

  const exportToPDF = async () => {
    if (!profileRef.current) return;

    const canvas = await html2canvas(profileRef.current, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${profile?.name}_CV.pdf`);

    toast.success("Currículo baixado com sucesso!");
  };

  if (isLoading) return <span className={styles.loader}></span>;
  if (isError || !profile)
    return (
      <p className={styles.error_message}>
        Perfil não encontrado. <Link href={"/"}>VOLTAR</Link>
      </p>
    );

  return (
    <section ref={profileRef} className={styles.profile_section}>
      <button className={styles.export_button} onClick={exportToPDF}>
        <Image src={pdfIcon} alt="pdf icon" /> Exportar como PDF
      </button>

      <section className={styles.side_information}>
        <div className={styles.profile_photo}>
          <img src={profile.avatarUrl} alt="Foto de perfil" />
        </div>

        <div className={styles.social_box}>
          <Link href={"#"} target="_blank" className={styles.social_link}>
            <Image src={location} alt="icone location" />
            {profile.city}
          </Link>
          <Link
            href={profile.linkedinUrl}
            target="_blank"
            className={styles.social_link}
          >
            <Image src={linkedin} alt="icone linkedin" /> Linkedin
          </Link>
          <Link
            href={profile.githubUrl}
            target="_blank"
            className={styles.social_link}
          >
            <Image src={github} alt="icone github" /> Github
          </Link>
          <Link
            href={`mailto:${profile.email}`}
            target="_blank"
            className={styles.social_link}
          >
            <Image src={email} alt="icone email" /> {profile.email}
          </Link>
          <Link href={"#"} target="_blank" className={styles.social_link}>
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
            {profile.stacks.map((stack) => (
              <div key={stack} className={styles.bubble}>
                <p>{stack}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <span className={styles.copy}>contrate.dev.com</span>
    </section>
  );
};

export default ProfileView;
