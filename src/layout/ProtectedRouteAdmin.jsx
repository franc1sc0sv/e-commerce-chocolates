import { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const ProtectedRouteAdmin = ({ children }) => {
  const { user, setUser } = useContext(AuthContext);
  const [noUsuario, setUsuario] = useState(false);

  const navigate = useNavigate();

  const cerarrSesion = () => {
    window.localStorage.removeItem("tokenEcommerce");
    setUser({});
    navigate("/");
  };

  useEffect(() => {
    if (!user.id) {
      setUsuario(true);
    }

    if (user.rol !== "admin") {
      setUsuario(true);
    }

    if (noUsuario) {
      navigate("/");
    }
  }, [noUsuario]);

  return (
    <>
      <header className="flex items-center justify-between p-4 text-white bg-primary">
        <Link className="text-2xl font-bold" to={"/admin"}>
          <h2>Chocolateria Admin</h2>
        </Link>

        <div className="flex gap-3">
          <button className="underline" onClick={cerarrSesion}>
            Cerrar sesion
          </button>

          <Link className="underline" to={"/admin/chocolates"}>
            Chocolates
          </Link>

          <Link className="underline" to={"/admin/caja-chocolate"}>
            Cajas de chocolates
          </Link>
        </div>
      </header>
      <main className="flex flex-col items-center gap-4 p-4">
        <Outlet />
      </main>
    </>
  );
};
