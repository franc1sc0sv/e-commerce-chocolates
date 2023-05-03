import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const ProtectedRouteUser = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  if (user.rol === undefined) return <p>loading</p>;

  useEffect(() => {
    if (user.rol !== "usuario") {
      navigate("/");
      return;
    }
  }, []);
  return <>{children}</>;
};
