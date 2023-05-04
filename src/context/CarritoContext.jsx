import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [productos, setProductos] = useState(() => {
    const productosStorage = window.localStorage.getItem(
      "carritoChocolateriaReact"
    );
    return JSON.parse(productosStorage) ?? [];
  });
  return (
    <CarritoContext.Provider value={{ productos, setProductos }}>
      {children}
    </CarritoContext.Provider>
  );
};
