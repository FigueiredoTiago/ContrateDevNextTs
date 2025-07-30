"use client";
import Select from "react-select";
import styles from "./styles.module.css";
import { useForm, Controller } from "react-hook-form";
import Cookies from "js-cookie";

import * as React from "react";
import Modal from "@mui/material/Modal";

import { createProfile } from "@/app/services/api";
import { CreateProfileData } from "@/app/types/Profile";
import { getProfileByUserId } from "../../services/api";

import Image from "next/image";
import glasses from "../../../../public/assets/img/glasses.svg";

type Option = {
  value: string;
  label: string;
};

const skillOptions: Option[] = [
  { value: "React", label: "React" },
  { value: "Vue", label: "Vue" },
  { value: "Angular", label: "Angular" },
  { value: "SASS", label: "SASS" },
  { value: "CSS", label: "CSS" },
  { value: "HTML", label: "HTML" },
  { value: "Node.js", label: "Node.js" },
  { value: "Java", label: "Java" },
  { value: "Python", label: "Python" },
  { value: "PHP", label: "PHP" },
  { value: "Ruby", label: "Ruby" },
  { value: "Go", label: "Go" },
  { value: "React Native", label: "React Native" },
  { value: "Flutter", label: "Flutter" },
  { value: "Kotlin", label: "Kotlin" },
  { value: "Swift", label: "Swift" },
  { value: "Docker", label: "Docker" },
  { value: "Kubernetes", label: "Kubernetes" },
  { value: "AWS", label: "AWS" },
  { value: "Azure", label: "Azure" },
  { value: "CI/CD", label: "CI/CD" },
  { value: "Cypress", label: "Cypress" },
  { value: "Jest", label: "Jest" },
  { value: "Selenium", label: "Selenium" },
  { value: "Playwright", label: "Playwright" },
  { value: "SQL", label: "SQL" },
  { value: "NoSQL", label: "NoSQL" },
  { value: "MongoDB", label: "MongoDB" },
  { value: "PostgreSQL", label: "PostgreSQL" },
  { value: "Power BI", label: "Power BI" },
  { value: "Figma", label: "Figma" },
  { value: "Adobe XD", label: "Adobe XD" },
  { value: "Sketch", label: "Sketch" },
  { value: "Zeplin", label: "Zeplin" },
];

export default function Modalprofile() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // PEGAR O ID DO USUARIO DO COOKIES E FAZER UM FETCH NA ROTA GETBYUSERID, PARA PREENCHER OS DADOS DO USUARIO.

  React.useEffect(() => {
    const userId = Cookies.get("id");

    if (!userId) return;

    const fetchProfile = async () => {
      try {
        const profileData = await getProfileByUserId(userId);

        if (profileData) {
          reset({
            name: profileData.name || "",
            email: profileData.email || "",
            githubUrl: profileData.githubUrl || "",
            linkedinUrl: profileData.linkedinUrl || "",
            city: profileData.city || "",
            mainStack: profileData.mainStack || "",
            phone: profileData.phone || "",
            stacks: profileData.stacks || [],
            websiteUrl: profileData.websiteUrl || "",
            about: profileData.about || "",
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<CreateProfileData>();

  const onSubmit = async (data: CreateProfileData) => {
    const avatarUrl = Cookies.get("avatarUrl") as string;

    const fullData = {
      ...data,
      avatarUrl,
    };

    try {
      const response = await createProfile(fullData);
    } catch (err) {
      console.error(err);
      alert("Erro ao criar perfil: " + err);
    }
    reset();
    handleClose();
  };

  return (
    <div>
      <button className={styles.btnModal} onClick={handleOpen}>
        {" "}
        Meu Perfil <Image src={glasses} alt="icone view" />
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modalContent}>
          <h2>DADOS DO MEU PERFIL (PUBLICO)</h2>
          <p>Alguns dados Serão preenchidos com suas informações do GitHub </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.row}>
              <input
                id="name"
                {...register("name", {
                  required: "required",
                })}
                type="text"
                placeholder="Nome Completo"
              />

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
            </div>

            <div className={styles.errorBox}>
              {errors.name && <span role="alert">Nome e Obrigatorio!</span>}
              {errors.email && typeof errors.email.message === "string" && (
                <span role="alert">Email e Obrigatorio!</span>
              )}
            </div>

            <div className={styles.row}>
              <input
                id="perfilGithub"
                {...register("githubUrl", {
                  required: "required",
                })}
                type="text"
                placeholder="Link do Perfil Github"
              />

              <input
                id="perfilLinkedin"
                {...register("linkedinUrl", {
                  required: "required",
                })}
                type="text"
                placeholder="Link do Perfil LinkedIn"
              />
            </div>

            <div className={styles.errorBox}>
              {errors.githubUrl && (
                <span role="alert"> Link do Perfil Github e Obrigatorio! </span>
              )}
              {errors.linkedinUrl && (
                <span role="alert">
                  {" "}
                  Link do Perfil LinkedIn e Obrigatorio!
                </span>
              )}
            </div>

            <div className={styles.row}>
              <select
                id="estado"
                {...register("city", {
                  required: "Estado é obrigatório",
                })}
                defaultValue=""
                className={styles.selectDark}
              >
                <option value="" disabled>
                  Selecione um estado
                </option>
                <option value="AC">Acre (AC)</option>
                <option value="AL">Alagoas (AL)</option>
                <option value="AP">Amapá (AP)</option>
                <option value="AM">Amazonas (AM)</option>
                <option value="BA">Bahia (BA)</option>
                <option value="CE">Ceará (CE)</option>
                <option value="DF">Distrito Federal (DF)</option>
                <option value="ES">Espírito Santo (ES)</option>
                <option value="GO">Goiás (GO)</option>
                <option value="MA">Maranhão (MA)</option>
                <option value="MT">Mato Grosso (MT)</option>
                <option value="MS">Mato Grosso do Sul (MS)</option>
                <option value="MG">Minas Gerais (MG)</option>
                <option value="PA">Pará (PA)</option>
                <option value="PB">Paraíba (PB)</option>
                <option value="PR">Paraná (PR)</option>
                <option value="PE">Pernambuco (PE)</option>
                <option value="PI">Piauí (PI)</option>
                <option value="RJ">Rio de Janeiro (RJ)</option>
                <option value="RN">Rio Grande do Norte (RN)</option>
                <option value="RS">Rio Grande do Sul (RS)</option>
                <option value="RO">Rondônia (RO)</option>
                <option value="RR">Roraima (RR)</option>
                <option value="SC">Santa Catarina (SC)</option>
                <option value="SP">São Paulo (SP)</option>
                <option value="SE">Sergipe (SE)</option>
                <option value="TO">Tocantins (TO)</option>
              </select>

              <select
                id="stack"
                {...register("mainStack", {
                  required: "A stack principal é obrigatória",
                })}
                defaultValue=""
                className={styles.selectDark}
              >
                <option value="" disabled>
                  Selecione sua stack principal
                </option>

                {/* Frontend */}
                <option value="JR.Frontend">JR.Frontend</option>
                <option value="PL.Frontend">PL.Frontend</option>
                <option value="SR.Frontend">SR.Frontend</option>

                {/* Backend */}
                <option value="JR.Backend">JR.Backend</option>
                <option value="PL.Backend">PL.Backend</option>
                <option value="SR.Backend">SR.Backend</option>

                {/* Fullstack */}
                <option value="JR.Fullstack">JR.Fullstack</option>
                <option value="PL.Fullstack">PL.Fullstack</option>
                <option value="SR.Fullstack">SR.Fullstack</option>

                {/* Mobile */}
                <option value="JR.Mobile">JR.Mobile</option>
                <option value="PL.Mobile">PL.Mobile</option>
                <option value="SR.Mobile">SR.Mobile</option>

                {/* DevOps */}
                <option value="JR.DevOps">JR.DevOps</option>
                <option value="PL.DevOps">PL.DevOps</option>
                <option value="SR.DevOps">SR.DevOps</option>

                {/* QA */}
                <option value="JR.QA">JR.QA</option>
                <option value="PL.QA">PL.QA</option>
                <option value="SR.QA">SR.QA</option>

                {/* Dados */}
                <option value="JR.Dados">JR.Dados</option>
                <option value="PL.Dados">PL.Dados</option>
                <option value="SR.Dados">SR.Dados</option>

                {/* UI/UX */}
                <option value="JR.UI/UX">JR.UI/UX</option>
                <option value="PL.UI/UX">PL.UI/UX</option>
                <option value="SR.UI/UX">SR.UI/UX</option>
              </select>
            </div>

            <div className={styles.errorBox}>
              {errors.city && <span role="alert">Cidade e obrigatoria!</span>}
              {errors.mainStack &&
                typeof errors.mainStack.message === "string" && (
                  <span role="alert">{errors.mainStack.message}</span>
                )}
            </div>

            <div className={styles.row}>
              <input
                id="telefone"
                type="tel"
                placeholder="(11) 91234-5678"
                {...register("phone", {
                  required: "O número de celular é obrigatório",
                  pattern: {
                    value: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
                    message: "Número de celular inválido",
                  },
                })}
              />

              <Controller
                control={control}
                name="stacks"
                rules={{ required: "Selecione pelo menos uma skill" }}
                render={({ field }) => (
                  <Select<Option, true>
                    options={skillOptions}
                    isMulti
                    placeholder="Selecione suas skills..."
                    className={styles.selectCustom}
                    value={skillOptions.filter((option) =>
                      Array.isArray(field.value)
                        ? field.value.includes(option.value)
                        : false
                    )}
                    onChange={(selected) => {
                      field.onChange(
                        selected ? selected.map((opt) => opt.value) : []
                      );
                    }}
                    styles={{
                      control: (base) => ({
                        ...base,
                        backgroundColor: "#282828",
                        borderColor: "#fff",
                        color: "#fff",
                        borderRadius: "10px",
                        minHeight: "52px",
                      }),
                      menu: (base) => ({
                        ...base,
                        backgroundColor: "#282828",
                        color: "#fff",
                        borderRadius: "10px",
                      }),
                      multiValue: (base) => ({
                        ...base,
                        backgroundColor: "#444",
                        color: "#fff",
                      }),
                      multiValueLabel: (base) => ({
                        ...base,
                        color: "#fff",
                      }),
                      multiValueRemove: (base) => ({
                        ...base,
                        color: "#ccc",
                        ":hover": {
                          backgroundColor: "#ff6b6b",
                          color: "#fff",
                        },
                      }),
                      input: (base) => ({
                        ...base,
                        color: "#fff",
                      }),
                      placeholder: (base) => ({
                        ...base,
                        color: "#fff",
                      }),
                      option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isSelected
                          ? "#444"
                          : state.isFocused
                          ? "#333"
                          : "transparent",
                        color: "#fff",
                        cursor: "pointer",
                      }),
                      singleValue: (base) => ({
                        ...base,
                        color: "#fff",
                      }),
                    }}
                  />
                )}
              />
            </div>

            <div className={styles.errorBox}>
              {errors.phone && typeof errors.phone.message === "string" && (
                <span role="alert">{errors.phone.message}</span>
              )}
              {errors.stacks && typeof errors.stacks.message === "string" && (
                <span role="alert">{errors.stacks.message}</span>
              )}
            </div>

            <div className={styles.row_unique}>
              <input
                id="website"
                {...register("websiteUrl", {
                  required: "required",
                })}
                type="text"
                placeholder="Site pessoal"
              />
            </div>

            <div className={styles.errorBox}>
              {errors.websiteUrl && (
                <span role="alert">Website e obrigatorio!</span>
              )}
            </div>

            <textarea
              id="biografia"
              placeholder="Fale um pouco sobre você..."
              {...register("about", {
                required: "A biografia é obrigatória",
                maxLength: {
                  value: 1500,
                  message: "A biografia deve ter no máximo 1500 caracteres",
                },
              })}
            />

            <div className={styles.errorBox}>
              {errors.about && typeof errors.about.message === "string" && (
                <span role="alert">{errors.about.message}</span>
              )}
            </div>

            <button type="submit" className={styles.formBtn}>
              SALVAR
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
