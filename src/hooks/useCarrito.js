import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { AlertsContext } from "../context/AlertsContext";
import { saveCarritoStorage } from "../functions/storageCarrito";

export const useCarrito = () => {
  const { setOpen, setSeverity, setMessage } = useContext(AlertsContext);

  const { productos, setProductos } = useContext(CarritoContext);

  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);

  const waiting = () => {
    setTimeout(() => {
      setIsloading(false);
      setOpen(true);
      setMessage("Producto añadido correctamente");
      setSeverity("success");
    }, 1000);
  };

  const setProductosInCarrito = ({ data }) => {
    setIsloading(true);
    try {
      const productosCopy = [...productos];
      if (!productosCopy.length) {
        data.cantidad = 1;
        productosCopy.push(data);
        setProductos(productosCopy);
        saveCarritoStorage({ data: productosCopy });
        waiting();
        return;
      }

      const IsProductInCar = productosCopy.some(
        (x) => x.id === data.id && x.tipo === data.tipo
      );

      if (IsProductInCar) {
        const newProducts = productosCopy.map((producto) => {
          if (producto.id === data.id) {
            producto.cantidad++;
          }
          return producto;
        });
      } else {
        data.cantidad = 1;
        productosCopy.push(data);
      }

      setProductos(productosCopy);
      saveCarritoStorage({ data: productosCopy });

      waiting();
    } catch (e) {
      setError(e);
    } finally {
      setTimeout(() => {
        setIsloading(false);
      }, 1000);
    }
  };

  const minusProduct = ({ id, tipo }) => {
    const productosCopy = [...productos];
    const newProducts = productosCopy.map((producto) => {
      if (
        producto.id === id &&
        producto.tipo === tipo &&
        producto.cantidad > 1
      ) {
        producto.cantidad--;
      }
      return producto;
    });

    setProductos(newProducts);
    saveCarritoStorage({ data: newProducts });
  };
  const plusProduct = ({ id, tipo }) => {
    const productosCopy = [...productos];
    const newProducts = productosCopy.map((producto) => {
      if (producto.id === id && producto.tipo === tipo) {
        producto.cantidad++;
      }
      return producto;
    });

    setProductos(newProducts);
    saveCarritoStorage({ data: newProducts });
  };
  const deleteProduct = ({ id, tipo }) => {
    const productosCopy = [...productos];
    const filteredProducts = productosCopy.filter(
      (producto) => !(producto.id === id && producto.tipo === tipo)
    );
    setProductos(filteredProducts);
    saveCarritoStorage({ data: filteredProducts });
  };

  return {
    isLoading,
    productos,
    setProductosInCarrito,
    error,
    minusProduct,
    plusProduct,
    deleteProduct,
  };
};
