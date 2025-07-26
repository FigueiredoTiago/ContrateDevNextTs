//funcao para pegar todos os perfis curriculos cadastrados
import { Profile, CreateProfileData } from "../types/Profile";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

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
    const token = Cookies.get("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

type CreateProfileResponse = {
  message: string;
  profile: Profile;
};

//cria ou atualiza um perfil:
export const createProfile = async (
  profileData: CreateProfileData
): Promise<Profile | null> => {
  try {
    const response = await api.post<CreateProfileResponse>(
      "/profile/create",
      profileData
    );
    toast(response.data.message);
    console.log(response.data);
    return response.data.profile;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorMessage =
        error.response.data?.message || "Erro desconhecido na API";
      toast.error(errorMessage);
    }

    return null;
  }
};

//pegar o profile de um usuario usando o id do userId
export const getProfileByUserId = async (
  userId: string
): Promise<Profile | null> => {
  try {
    const response = await api.get(`/profile/user/${userId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorMessage =
        error.response.data?.message || "Erro desconhecido na API";
      toast.error(errorMessage);
    }

    return null;
  }
};

//pega o profile usando o ID do Profile
export const getProfileId = async (id: string): Promise<Profile | null> => {
  try {
    const response = await api.get(`/profile/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorMessage =
        error.response.data?.message || "Erro desconhecido na API";
      console.log(errorMessage);
      return null;
    }

    return null;
  }
};
