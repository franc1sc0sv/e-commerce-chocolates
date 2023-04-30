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

import { UnprotectedRoute } from "./layout/UnprotectedRoute";

import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter([
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
    element: <Chocolates />,
  },
  {
    path: "/cajas",
    element: <Cajas />,
  },
  {
    path: "/feedBack",
    element: <FeedBack />,
  },
  {
    path: "/carrito",
    element: <Carrito />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
