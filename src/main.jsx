import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { IniciarSesion } from './Pages/IniciarSesion.jsx'
import { Inicio } from './Pages/Inicio.jsx'
import { Chocolates } from './Pages/Chocolates.jsx'
import { Cajas } from './Pages/Cajas.jsx'
import { FeedBack } from './Pages/FeedBack.jsx'
import { Carrito } from './Pages/Carrito'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/IniciarSesion",
    element: <IniciarSesion />,
  },
  {
    path: "/Chocolates",
    element: <Chocolates />,
  },
  {
    path: "/Cajas",
    element: <Cajas />,
  },
  {
    path: "/FeedBack",
    element: <FeedBack />,
  },
  {
    path: "/Carrito",
    element: <Carrito />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />
)
