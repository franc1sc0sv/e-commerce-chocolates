import { useCallback, useState, useContext } from "react";
import { setFeed } from "../api/feed";
import { AlertsContext } from "../context/AlertsContext";
import { useNavigate } from "react-router-dom";

export const useFeed = () => {
  const { setOpen, setSeverity, setMessage } = useContext(AlertsContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const waiting = ({reset}) => {
    setTimeout(() => {
      setIsLoading(false);
      reset()
      setOpen(true);
      setMessage("Valoracion agregada exitosamente");
      setSeverity("success");

    }, 1000);
  };


  const feedProceso = useCallback(async ({ datos, reset }) => {
    setIsLoading(true);
    try {
      const data = await setFeed({ datos });
      waiting({reset})
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
