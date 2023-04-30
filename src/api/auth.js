import { axiosClient } from "../config/axiosClient";

export const registerUser = async ({ datos }) => {
  const data = await axiosClient.post("registrar", datos);
  return data;
};

export const loginUser = async ({ datos }) => {
  const data = await axiosClient.post("login", datos);
  return data;
};

export const getUser = async () => {
  const token = window.localStorage.getItem("tokenEcommerce");
  const configHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axiosClient.get("perfil", configHeaders);
  return data;
};
