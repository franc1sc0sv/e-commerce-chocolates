import { useCallback, useState, useContext } from "react";
import { setFeed } from "../api/feed";
import { AlertsContext } from "../context/AlertsContext";
import { useNavigate } from "react-router-dom";

export const useFeed = () => {
  const { setOpen, setSeverity, setMessage } = useContext(AlertsContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const feedProceso = useCallback(async ({ datos }) => {
    setIsLoading(true);
    try {
      const data = await setFeed({ datos });

      setOpen(true);
      setMessage("Se ha registrado su opinion correctamente");
      setSeverity("success");
    } catch ({ response }) {
      setError(response.data.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, []);
  return { isLoading, error, feedProceso };
};
