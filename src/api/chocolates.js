import { axiosClient } from "../config/axiosClient";

export const obtenerChocolates = async () => {
  const { data } = await axiosClient.get("chocolates");
  return data;
};

export const obtenerChocolatesFavoritos = async () => {
  const token = window.localStorage.getItem("tokenEcommerce");
  const configHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axiosClient.get("favoritos", configHeaders);
  return data;
};

export const alternarChocolateFav = async ({ id }) => {
  const token = window.localStorage.getItem("tokenEcommerce");
  const configHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axiosClient.get(`favoritos/${id}`, configHeaders);
  return data;
};
