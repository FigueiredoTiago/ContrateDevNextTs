//funcao para pegar todos os perfis curriculos cadastrados
import { Profile, CreateProfileData } from "../types/Profile";
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

//pega todos os CVs cadastrados

export const getProfiles = async (): Promise<Profile[]> => {
  try {
    const response = await api.get<Profile[]>("profile/random");

    if (Array.isArray(response.data) && response.data.length === 0) {
      throw new Error("Nenhum perfil encontrado.");
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorMessage =
        error.response.data?.message || "Erro desconhecido na API";
      throw new Error(errorMessage);
    }

    throw new Error("Erro ao buscar perfis.");
  }
};

api.interceptors.request.use(
  (config) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjYjI1ZWIxLWZkYjItNGVjYy04YzkwLTg3OTg1YWFkMGFkMSIsImlhdCI6MTc1MTAyODQwNywiZXhwIjoxNzUxMTE0ODA3fQ.e2Z-TSbk-JfZSGiGCnLlG_nkOHukFVSUYbXOn9yh3Vw";
    // const token = localStorage.getItem("token"); // ou use cookies, sessionStorage etc.
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//cria ou atualiza um perfil:
export const createProfile = async (
  profileData: CreateProfileData
): Promise<Profile> => {
  try {
    const response = await api.post<Profile>("/profile/create", profileData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorMessage =
        error.response.data?.message || "Erro desconhecido na API";
      throw new Error(errorMessage);
    }

    throw new Error("Erro ao criar perfil.");
  }
};
