import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function HeaderAdmin() {
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
          <div className="flex items-center justify-center gap-2">
            <MenuUsuario cerarrSesion={cerarrSesion} />

            <div></div>
            <p className="text-lg font-medium font-Outfit text-primary">
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
          {/* <div className="absolute top-[6px] left-8 rounded-full bg-primary font-SourceCodePro text-[12px] h-[18px] w-[18px] grid place-items-center text-white group-hover:bg-white group-hover:text-primary">+9</div> */}
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
        <Menu.Button className="inline-flex justify-center w-full p-1 text-sm font-medium text-white transition-all duration-200 ease-in-out rounded-full bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:bg-progresiveBar">
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
        <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item
              onClick={() => {
                cerarrSesion();
              }}
            >
              <Link
                to="/"
                className="flex items-center w-full px-2 py-2 text-sm rounded-md group"
              >
                <LogoutIcon className="w-5 h-5 mr-2 text-primary" />
                Cerrar sesion
              </Link>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
