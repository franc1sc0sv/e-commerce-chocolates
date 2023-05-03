import { loginUser } from "../api/auth";

import { useNavigate } from "react-router-dom";
import { useCallback, useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { AlertsContext } from "../context/AlertsContext";

const redirecByRole = ({ navigate, rol }) => {
  if (rol === "usuario") {
    navigate("/");
    return;
  }
  navigate("/admin");
};

export const useLogin = () => {
  const { setUser } = useContext(AuthContext);
  const { setOpen, setMessage, setSeverity } = useContext(AlertsContext);
  const [error, setError] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const loginProcess = useCallback(async ({ datos }) => {
    setIsloading(true);
    try {
      const { data } = await loginUser({ datos });
      window.localStorage.setItem("tokenEcommerce", data.token);
      setUser(data);
      setError(false);

      setOpen(true);
      setMessage("Has iniciado correctamente");
      setSeverity("success");

      setTimeout(() => {
        redirecByRole({ rol: data.rol, navigate });
        setOpen(false);
      }, 800);
    } catch ({ response }) {
      setError(response.data.message);
    } finally {
      setTimeout(() => {
        setIsloading(false);
      }, 500);
    }
  }, []);

  return { error, isLoading, loginProcess };
};
