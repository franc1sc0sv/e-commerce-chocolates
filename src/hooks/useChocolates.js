import { useEffect, useState } from "react";

import { obtenerChocolates } from "../api/chocolates";

export const useChocolates = () => {
  const [chocolates, setChocolates] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const fetcherChocolates = async () => {
      setIsloading(true);
      try {
        const { chocolates } = await obtenerChocolates();
        setChocolates(chocolates);
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

  return { chocolates, error, isLoading };
};
