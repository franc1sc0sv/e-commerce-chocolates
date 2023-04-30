import { loginUser } from "../api/auth";
import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const useLogin = () => {
  const { setUser } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const loginProcess = useCallback(async ({ datos }) => {
    try {
      setIsloading(true);

      const { data } = await loginUser({ datos });
      window.localStorage.setItem("tokenEcommerce", data.token);
      setUser(data);

      setError(false);
    } catch ({ response }) {
      setError(response.data.message);
      console.log(response.data.message);
    } finally {
      setTimeout(() => {
        setIsloading(false);
      }, 1000);
    }
  }, []);

  return { error, isLoading, loginProcess };
};
