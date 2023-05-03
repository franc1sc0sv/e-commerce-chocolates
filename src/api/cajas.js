import { axiosClient } from "../config/axiosClient";

export const obtenerCajas = async () => {
  const { data } = await axiosClient.get("cajasXD");
  return data;
};
