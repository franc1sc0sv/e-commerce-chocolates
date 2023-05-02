import { axiosClient } from "../config/axiosClient";

export const obtenerChocolates = async () => {
  const { data } = await axiosClient.get("chocolatesXD");
  return data;
};
