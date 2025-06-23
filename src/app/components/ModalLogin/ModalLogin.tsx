"use client";
import styles from "./styles.module.css";
import LoginBtn from "../loginBtn/LoginBtn";
import Image from "next/image";
import githubIcon from "../../../../public/assets/img/githubWhite.svg";

import * as React from "react";
import Modal from "@mui/material/Modal";

export default function ModalLogin() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className={styles.btnModal} onClick={handleOpen}>
        {" "}
        <Image src={githubIcon} alt="github icon" /> Login
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modalContent}>
          <h2>ENTRAR</h2>

          <p>
            Carregue seus dados de maneira simplificada usando Seu Perfil abaixo{" "}
          </p>

          <LoginBtn />
        </div>
      </Modal>
    </div>
  );
}
