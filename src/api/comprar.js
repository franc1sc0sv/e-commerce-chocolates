import { axiosClient } from "../config/axiosClient";

export const realizarCompra = async ({ chocolatesFinales, cajasFinales }) => {
  const token = window.localStorage.getItem("tokenEcommerce");
  const configHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log(configHeaders);

  const { data } = await axiosClient.post(
    "comprar",
    {
      chocolates: chocolatesFinales,
      cajas: cajasFinales
    },
    configHeaders
  );
  return data;
};
