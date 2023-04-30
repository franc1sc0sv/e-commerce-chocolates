import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const UnprotectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.rol === "usuario") {
      navigate("/");
      return;
    }
    if (user.rol === "admin") {
      navigate("/admin");
      return;
    }
  }, []);

  return <>{children}</>;
};
