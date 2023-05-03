import { axiosClient } from "../config/axiosClient";

export const obtenerCajas = async () => {
  const { data } = await axiosClient.get("cajas-chocolate");
  return data;
};
