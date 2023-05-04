import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CarritoContext } from "../context/CarritoContext";

export default function Header() {
  const { productos } = useContext(CarritoContext);
  const cantidad = productos.length;
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const isLoged = user.id;

  const cerarrSesion = () => {
    window.localStorage.removeItem("tokenEcommerce");
    setUser({});
    navigate("/");
  };

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
        {isLoged ? (
          <div className="flex gap-2 justify-center items-center">
            <MenuUsuario cerarrSesion={cerarrSesion} />

            <div></div>
            <p className=" font-Outfit font-medium text-primary text-lg">
              {user.nombre}
            </p>
          </div>
        ) : (
          <NavLink
            to={"/iniciarSesion"}
            className=" flex items-center text-lg w-fit bg-primary text-white font-Outfit font-medium p-2 rounded hover:bg-white hover:text-primary border border-primary duration-[500ms] ease-in-out"
          >
            Inicio de Sesion
          </NavLink>
        )}

        <NavLink
          to={"/carrito"}
          className=" items-center flex gap-3 border border-primary w-fit px-4 py-[10px] rounded font-Outfit text-primary font-medium hover:bg-primary hover:text-white duration-[500ms] ease-in-out relative group"
        >
          {cantidad > 0 && (
            <div className="absolute top-[6px] left-8 rounded-full bg-primary font-SourceCodePro text-[12px] h-[18px] w-[18px] grid place-items-center text-white group-hover:bg-white group-hover:text-primary">
              {cantidad > 9 ? "+9" : cantidad}
            </div>
          )}

          <ShoppingCartOutlinedIcon />
          <p className="text-lg">Carrito</p>
        </NavLink>
      </div>
    </div>
  );
}

function MenuUsuario({ cerarrSesion }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-full p-1 bg-opacity-20 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:bg-progresiveBar transition-all ease-in-out duration-200">
          <AccountCircleOutlinedIcon
            className=" text-primary !text-[45px]"
            fontSize="large"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item
              onClick={() => {
                cerarrSesion();
              }}
            >
              <Link
                to="/"
                className=" group flex w-full items-center rounded-md px-2 py-2 text-sm"
              >
                <LogoutIcon className="mr-2 h-5 w-5 text-primary" />
                Cerrar sesion
              </Link>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
