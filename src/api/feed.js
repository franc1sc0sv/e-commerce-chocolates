import { axiosClient } from "../config/axiosClient";

export const setFeed = async ({ datos }) => {
  const token = window.localStorage.getItem("tokenEcommerce");
  const configHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axiosClient.post("feedback", datos, configHeaders);
  return data;
};
