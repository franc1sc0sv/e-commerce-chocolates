import { useContext, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
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
      <header className="bg-primary flex justify-between items-center text-white p-4">
        <Link  
          className="font-bold text-2xl"
          to={"/admin"}>
          <h2>Chocolateria Admin</h2>
        </Link>

        <Link
          className="underline" 
          to={"/admin/chocolates"}>Chocolates</Link>
      </header>
      <main className="flex flex-col items-center p-4 gap-4">
        <Outlet />
      </main>
    </>
  );
};
