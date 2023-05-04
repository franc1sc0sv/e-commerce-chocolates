import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import CircularProgress from "@mui/material/CircularProgress";

import { useContext } from "react";
import { useChocolates } from "../hooks/useChocolates";

import { alternarChocolateFav } from "../api/chocolates";
import { useCarrito } from "../hooks/useCarrito";
import { AuthContext } from "../context/AuthContext";

export const CardChocolate = ({ datos }) => {
  const { id, nombre, precio, marca, favorite } = datos;

  const { isLoading, setProductosInCarrito } = useCarrito();
  const { chocolates, setChocolates, setFavorites } = useChocolates();
  const { user } = useContext(AuthContext);

  const data = {
    id: id,
    precio: precio,
    nombre: nombre,
    tipo: "chocolate",
  };

  const handleClickCarrito = () => {
    if (isLoading) return;
    setProductosInCarrito({ data });
  };

  const handleClick = async () => {
    const data = await alternarChocolateFav({ id });
    const newFavoritesChocolates = await setFavorites({ chocolates });

    setChocolates(newFavoritesChocolates);
  };

  return (
    <>
      <div className="border border-gray-200 rounded-lg  grid items-center max-w-[270px] gap-2 p-4 text-primary h-[420px]">
        <div className="relative w-full max-w-[270px] aspect-square h-36 bg-gray-300 rounded-lg">
          {user.id && (
            <>
              {favorite ? (
                <FavoriteOutlinedIcon
                  onClick={handleClick}
                  className="absolute cursor-pointer right-3 top-3"
                />
              ) : (
                <FavoriteBorderOutlinedIcon
                  onClick={handleClick}
                  className="absolute cursor-pointer right-3 top-3"
                />
              )}
            </>
          )}
        </div>
        <h2 className="text-xl font-bold break-all">{nombre}</h2>
        <p className="text-sm font-light break-all font-SourceCodePro">
          {nombre} de la marca {marca}
        </p>

        <div className="flex flex-col self-end gap-4">
          <p className="self-start text-4xl font-bold tracking-wider font-Montserrat">
            ${precio}
          </p>
          <button
            className="w-full p-1 text-white rounded-full bg-primary "
            onClick={handleClickCarrito}
          >
            {isLoading ? (
              <CircularProgress
                size={20}
                sx={{
                  color: "#fff",
                }}
              />
            ) : (
              <AddShoppingCartOutlinedIcon className="text-white" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};
