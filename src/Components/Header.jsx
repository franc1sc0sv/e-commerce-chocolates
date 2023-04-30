import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function Header() {
  const NavLinkStyles =
    "text-primary font-bold opacity-50 hover:opacity-100 border-transparent border-b-[2px] hover:border-primary duration-[500ms] ease-in-out";
  const ActiveNavLink = "text-primary font-bold border-b-[2px] border-primary";
  return (
    <div className="flex items-center justify-between w-full px-10 py-4">
      <div className="flex w-full gap-6">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? ActiveNavLink : NavLinkStyles
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to={"/chocolates"}
          className={({ isActive }) =>
            isActive ? ActiveNavLink : NavLinkStyles
          }
        >
          Chocolates
        </NavLink>
        <NavLink
          to={"/cajas"}
          className={({ isActive }) =>
            isActive ? ActiveNavLink : NavLinkStyles
          }
        >
          Cajas
        </NavLink>
        <NavLink
          to={"/feedback"}
          className={({ isActive }) =>
            isActive ? ActiveNavLink : NavLinkStyles
          }
        >
          Feedback
        </NavLink>
      </div>
      <div className="flex justify-end w-full gap-4">
        <NavLink
          to={"/iniciarSesion"}
          className=" flex items-center text-lg w-fit bg-primary text-white font-Outfit font-medium p-2 rounded hover:bg-white hover:text-primary border border-primary duration-[500ms] ease-in-out"
        >
          Inicio de Sesion
        </NavLink>
        <NavLink
          to={"/carrito"}
          className=" items-center flex gap-3 border border-primary w-fit px-4 py-[10px] rounded font-Outfit text-primary font-medium hover:bg-primary hover:text-white duration-[500ms] ease-in-out relative group"
        >
          {/* <div className="absolute top-[6px] left-8 rounded-full bg-primary font-SourceCodePro text-[12px] h-[18px] w-[18px] grid place-items-center text-white group-hover:bg-white group-hover:text-primary">+9</div> */}
          <ShoppingCartOutlinedIcon />
          <p className="text-lg">Carrito</p>
        </NavLink>
      </div>
    </div>
  );
}
