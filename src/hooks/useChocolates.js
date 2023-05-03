import { useContext, useEffect, useState } from "react";

import {
  obtenerChocolates,
  obtenerChocolatesFavoritos,
} from "../api/chocolates";
import { AuthContext } from "../context/AuthContext";
import { FiltersChocolatesContext } from "../context/FiltersChocolatesContext";

export const useChocolates = () => {
  const { user } = useContext(AuthContext);
  const { chocolates, setChocolates } = useContext(FiltersChocolatesContext);

  const [error, setError] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const setFavorites = async ({ chocolates }) => {
    const favorites = await obtenerChocolatesFavoritos();
    return chocolates.map((chocolate) => {
      const isFavorite = favorites.some((favorite) => {
        return favorite.id === chocolate.id;
      });

      if (isFavorite) {
        chocolate.favorite = true;
      } else {
        chocolate.favorite = false;
      }

      return chocolate;
    });
  };

  useEffect(() => {
    const fetcherChocolates = async () => {
      setIsloading(true);
      try {
        let data = await obtenerChocolates();

        if (user.id) {
          data = await setFavorites({
            chocolates: data,
          });
        }

        setChocolates(data);
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

  return { chocolates, setChocolates, error, isLoading, setFavorites };
};
