import { useEffect, useState } from "react";

import { obtenerCajas } from "../api/cajas";

export const useCajas = () => {
  const [cajas, setCajas] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const fetcherChocolates = async () => {
      setIsloading(true);
      try {
        const data = await obtenerCajas();
        setCajas(data);
      } catch (e) {
        setError(e);
      } finally {
        setTimeout(() => {
          setIsloading(false);
        }, 1000);
      }
    };
    fetcherChocolates();
  }, []);

  return { cajas, error, isLoading };
};
