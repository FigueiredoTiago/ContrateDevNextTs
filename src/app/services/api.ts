//funcao para pegar todos os perfis curriculos cadastrados

import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface Profile {
  id: string;
  userId: string;
  name: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  websiteUrl: string;
  city: string;
  phone: string;
  about: string;
  stacks: string[];
}

//pega todos os CVs cadastrados

export const getProfiles = async (): Promise<Profile[]> => {
  try {
    const response = await api.get<Profile[]>("profile/random");
    if (response.data.length > 0) {
      return response.data;
    }

    return [];
  } catch (error) {
    console.log("Error na api getProfiles:", error);
    return [];
  }
};
