import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const ProtectedRouteUser = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [noUsuario, setUsuario] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    if (!user.id) {
      setUsuario(true);
    }

    if (user.rol !== "usuario") {
      setUsuario(true);
    }

    if(noUsuario){
      navigate("/");
    }

  }, [noUsuario])





  return <>{children}</>;
};
