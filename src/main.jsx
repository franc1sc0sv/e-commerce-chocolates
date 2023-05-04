import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { IniciarSesion } from "./Pages/IniciarSesion.jsx";
import { Inicio } from "./Pages/Inicio.jsx";
import { Chocolates } from "./Pages/Chocolates.jsx";
import { Cajas } from "./Pages/Cajas.jsx";
import { FeedBack } from "./Pages/FeedBack.jsx";
import { Carrito } from "./Pages/Carrito";
import { Registro } from "./Pages/Registro";
import Admin from "./Pages/Admin/Admin";
import { CajasCustom } from "./Pages/CajasCustom";
import { Pago } from "./Pages/Pago";

import { UnprotectedRoute } from "./layout/UnprotectedRoute";
import { ProtectedRouteAdmin } from "./layout/ProtectedRouteAdmin";
import { ProtectedRouteUser } from "./layout/ProtectedRouteUser";

import { AuthProvider } from "./context/AuthContext";
import { AlertsProvider } from "./context/AlertsContext";
import { FiltersChocolatesProvider } from "./context/FiltersChocolatesContext";
import { FiltersCajasProvider } from "./context/FiltersCajasContext";

import AdminChocolates from "./Pages/Admin/chocolates/AdminChocolates";
import AdminAgregarChocolate from "./Pages/Admin/chocolates/AdminAgregarChocolate";
import AdminEditarChocolate from "./Pages/Admin/chocolates/AdminEditarChocolate";
import AdminCaja from "./Pages/Admin/cajas/AdminCaja";
import AdminAgregarCaja from "./Pages/Admin/cajas/AdminAgregarCaja";
import AdminEditarCaja from "./Pages/Admin/cajas/AdminEditarCaja";

import { CarritoProvider } from "./context/CarritoContext";




const router = createBrowserRouter([
  {
    path: "/admin",
    element: <ProtectedRouteAdmin />,
    children: [
      {
        index: true,
        element: <Admin />,
      },

      {
        path: "chocolates",
        children: [
          {
            index: true,
            element: <AdminChocolates />,
          },
          {
            path: "agregar",
            element: <AdminAgregarChocolate />,
          },
          {
            path: "editar/:id",
            element: <AdminEditarChocolate />
          }
        ],
      },
      {
        path: "caja-chocolate",
        children: [
          {
            index: true,
            element: <AdminCaja />,
          },
          {
            path: "agregar",
            element: <AdminAgregarCaja />,
          },
          {
            path: "editar/:id",
            element: <AdminEditarCaja />
          }
        ],
      },
    ],
  },
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/iniciarSesion",
    element: (
      <UnprotectedRoute>
        <IniciarSesion />
      </UnprotectedRoute>
    ),
  },
  {
    path: "/registro",
    element: (
      <UnprotectedRoute>
        <Registro />
      </UnprotectedRoute>
    ),
  },
  {
    path: "/chocolates",
    element: (
      <FiltersChocolatesProvider>
        <Chocolates />
      </FiltersChocolatesProvider>
    ),
  },
  {
    path: "/cajas",
    element: (
      <FiltersCajasProvider>
        <Cajas />
      </FiltersCajasProvider>
    ),
  },
  {
    path: "/cajascustom",
    element: (
      <ProtectedRouteUser>
        <CajasCustom />
      </ProtectedRouteUser>
    ),
  },
  {
    path: "/feedBack",
    element: <FeedBack />,
  },
  {
    path: "/carrito",
    element: <Carrito />,
  },
  {
    path: "/pago",
    element: (
      <ProtectedRouteUser>
        <Pago />
      </ProtectedRouteUser>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CarritoProvider>
      <AlertsProvider>
        <RouterProvider router={router} />
      </AlertsProvider>
    </CarritoProvider>
  </AuthProvider>
);
