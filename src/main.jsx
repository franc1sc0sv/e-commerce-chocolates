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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/iniciarSesion",
    element: <IniciarSesion />,
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
  {
    path: "/registro",
    element: <Registro />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
