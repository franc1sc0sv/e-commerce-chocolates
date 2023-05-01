import { useContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../api/auth";

import { RegisterContext } from "../context/RegisterContext";
import { AlertsContext } from "../context/AlertsContext";

export const useRegister = () => {
  const { form } = useContext(RegisterContext);

  const { setOpen, setMessage, setSeverity } = useContext(AlertsContext);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const isValidLastForm = form.steps.details.valid;

  const formatData = ({ form }) => {
    return {
      email: form.steps.details.value.email,
      nombre: form.steps.details.value.name,
      password: form.steps.details.value.password,
      direccion: form.steps.extraData.value.adress,
      telefono: form.steps.extraData.value.phone,
    };
  };

  const registerProceso = useCallback(async ({ data }) => {
    setIsloading(true);
    const formatedData = formatData({ form });

    try {
      const response = await registerUser({ datos: formatedData });
      setError(false);

      setOpen(true);
      setMessage("Cuenta creada correctamente");
      setSeverity("success");

      setTimeout(() => {
        navigate("/IniciarSesion");
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

  return { isLoading, error, registerProceso, isValidLastForm };
};
