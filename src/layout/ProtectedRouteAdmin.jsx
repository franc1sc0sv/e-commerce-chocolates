import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import HeaderAdmin from "../Components/HeaderAdmin";

export const ProtectedRouteAdmin = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (user.rol === undefined) return <p>loading</p>;

  useEffect(() => {
    console.log(user.rol);
    if (user.rol !== "admin") {
      navigate("/");
      return;
    }
  }, []);
  return (
    <>
      <HeaderAdmin />
      {children}
    </>
  );
};
