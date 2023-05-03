import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

export const CajasCard = ({ datos }) => {
  const { id, nombre, precio, marca } = datos;
  return (
    <>
      <div className="border border-gray-200 rounded-lg  grid items-center max-w-[270px] gap-2 p-4 text-primary h-[420px]">
        <div className="relative w-full max-w-[270px] aspect-square h-36 bg-gray-300 rounded-lg">
          <FavoriteBorderOutlinedIcon className="absolute cursor-pointer right-3 top-3" />
        </div>
        <h2 className="text-xl font-bold break-all">{nombre}</h2>
        <p className="text-sm font-light break-all font-SourceCodePro"></p>

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
