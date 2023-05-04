import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ConstructionOutlined } from "@mui/icons-material";

export const ProtectedRouteUser = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (user.rol === undefined) return;
  useEffect(() => {
    if (user.rol !== "usuario") {
      navigate("/");
      return;
    }
  }, []);
  return <>{children}</>;
};
