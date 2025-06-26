"use client";
import styles from "./styles.module.css";
import { useForm } from "react-hook-form";

import * as React from "react";
import Modal from "@mui/material/Modal";

export default function Modalprofile() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <button className={styles.btnModal} onClick={handleOpen}>
        {" "}
        Meu Perfil
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modalContent}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              id="name"
              {...register("name", {
                required: "required",
              })}
              type="text"
              placeholder="Nome Completo"
            />
            {errors.name && <span role="alert">Nome e Obrigatorio!</span>}

            <input
              id="email"
              {...register("email", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              type="email"
              placeholder="Email"
            />
            {errors.email && typeof errors.email.message === "string" && (
              <span role="alert">{errors.email.message}</span>
            )}

            <input
              id="perfilGithub"
              {...register("githubUrl", {
                required: "required",
              })}
              type="text"
              placeholder="Link do Perfil Github"
            />
            {errors.githubUrl && (
              <span role="alert"> Link do Perfil Github e Obrigatorio! </span>
            )}

            <input
              id="perfilLinkedin"
              {...register("linkedinUrl", {
                required: "required",
              })}
              type="text"
              placeholder="Link do Perfil LinkedIn"
            />
            {errors.linkedinUrl && (
              <span role="alert"> Link do Perfil LinkedIn e Obrigatorio!</span>
            )}

            <input
              id="cidade"
              {...register("city", {
                required: "required",
              })}
              type="text"
              placeholder="Link do Perfil LinkedIn"
            />
            {errors.linkedinUrl && (
              <span role="alert"> Link do Perfil LinkedIn e Obrigatorio!</span>
            )}

            <button type="submit">Atualizar Perfil</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
