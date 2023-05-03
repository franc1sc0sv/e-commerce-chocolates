import React from "react";
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
import { Admin } from "./Pages/admin";
import { CajasCustom } from "./Pages/CajasCustom";
import { Pago } from "./Pages/Pago";

import { UnprotectedRoute } from "./layout/UnprotectedRoute";
import { ProtectedRouteAdmin } from "./layout/ProtectedRouteAdmin";
import { ProtectedRouteUser } from "./layout/ProtectedRouteUser";

import { AuthProvider } from "./context/AuthContext";
import { AlertsProvider } from "./context/AlertsContext";
import { FiltersChocolatesProvider } from "./context/FiltersChocolatesContext";
import { FiltersCajasProvider } from "./context/FiltersCajasContext";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: (
      <ProtectedRouteAdmin>
        <Admin />
      </ProtectedRouteAdmin>
    ),
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
    <AlertsProvider>
      <RouterProvider router={router} />
    </AlertsProvider>
  </AuthProvider>
);
