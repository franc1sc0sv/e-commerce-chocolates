import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useChocolates } from "../hooks/useChocolates";

import { alternarChocolateFav } from "../api/chocolates";

export const CardChocolate = ({ datos }) => {
  const { chocolates, setChocolates, setFavorites } = useChocolates();
  const { user } = useContext(AuthContext);

  const { id, nombre, precio, marca, favorite } = datos;

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
          <button className="w-full p-1 text-white rounded-full bg-primary">
            <AddShoppingCartOutlinedIcon className="text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

// <div className="flex flex-col gap-2 p-5 rounded-lg shadow-md text-primary h-[420px]">
//   <div className="relative w-full h-40 bg-[#e0dcdc] rounded-xl">
//     <FavoriteBorderOutlinedIcon className="absolute cursor-pointer right-3 top-3" />
//   </div>
//   <p className="text-2xl font-bold font-SourceCodePro">{nombre}</p>
//   <p className="text-sm font-light font-SourceCodePro">
//     {nombre} de la marca {marca}
//   </p>
//   <p className="text-4xl font-bold tracking-wider font-Montserrat">
//     ${precio}
//   </p>
//   <button className="grid w-full py-2 rounded-full place-items-center bg-primary">
//     <AddShoppingCartOutlinedIcon className="text-white" />
//   </button>
// </div>
