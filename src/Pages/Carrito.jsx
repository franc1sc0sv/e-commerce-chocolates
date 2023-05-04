import HomeLayout from "../layout/HomeLayout";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { useCarrito } from "../hooks/useCarrito";

export const Carrito = () => {
  const { productos } = useContext(CarritoContext);
 
  const total = productos.reduce(
    (total, accum) => total + accum.precio * accum.cantidad,
    0
  ).toLocaleString('es', { currency: 'USD' });

  return (
    <HomeLayout>
      <div className="flex w-[90%] gap-16 mx-auto my-10">
        <div className="flex flex-col w-[60%] gap-5 ">
          <div className="flex flex-col gap-3 h-[200px]">
            <p className="text-5xl font-bold font-SourceCodePro">
              Carrito de compras
            </p>
            <p className="text-lg font-medium font-Outfit">
              Dentro de tu carrito de compras puedes dejar temporalmente los
              productos que quieras. Recuerda que el precio y la disponibilidad
              de los productos están sujetos a cambio, en tu carrito aparecerá
              el precio más reciente de cada producto.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {!productos.length ? (
              <NoItemsCarrito />
            ) : (
              <CardsContainer productos={productos} />
            )}
          </div>

          <p className="self-end text-xl font-bold font-SourceCodePro">
            Subtotal ({productos.length} items): ${total}
          </p>
        </div>

        <div className="w-[40%] h-[200px] max-w-[490px] bg-gray-300 rounded-lg p-5 flex flex-col gap-2 justify-center">
          <div className="flex items-center justify-between w-full">
            <p className="text-lg font-bold font-SourceCodePro">
              Subtotal ({productos.length} items)
            </p>
            <p className="text-4xl font-extrabold font-SourceCodePro">
              ${total}
            </p>
          </div>
          <Link
            to="/pago"
            className=" bg-white font-bold text-lg w-full gap-3 border border-primary text-center  py-[10px] rounded font-Outfit text-primary hover:bg-primary hover:text-white duration-[500ms] ease-in-out"
          >
            Completar la compra
          </Link>
        </div>
      </div>
    </HomeLayout>
  );
};

const CardsContainer = ({ productos }) => {
  return productos.map((producto, i) => {
    return <CardCarritos key={i} data={producto} />;
  });
};

const CardCarritos = ({ data }) => {
  const { minusProduct, plusProduct, deleteProduct } = useCarrito();

  const { id, precio, nombre, cantidad, tipo } = data;

  const handleMinus = () => {
    minusProduct({ id, tipo });
  };

  const handlePlus = () => {
    plusProduct({ id, tipo });
  };

  const handleDelete = () => {
    deleteProduct({ id, tipo });
  };
  return (
    <div className="flex p-5 rounded-lg gap-14 w- h-max bg-borderInputs">
      <div className=" w-full max-w-[270px] aspect-square h-36 bg-gray-300 rounded-lg"></div>
      <div className="w-full h-auto py-4">
        <div className="flex justify-between">
          <p className="text-xl font-bold font-SourceCodePro">{nombre}</p>

          <p className="text-3xl font-bold font-SourceCodePro">${precio} </p>
        </div>

        <div className="flex gap-2">
          <div className=" flex w-40 justify-evenly text-lg gap-3 border border-primary text-center  py-[10px] rounded font-Outfit bg-white ">
            <RemoveIcon className="cursor-pointer" onClick={handleMinus} />
            <p className="font-bold">{cantidad}</p>
            <AddIcon className="cursor-pointer" onClick={handlePlus} />
          </div>

          <div
            onClick={handleDelete}
            className=" flex items-center text-lg gap-1 border text-center  py-[10px] rounded font-Outfit cursor-pointer "
          >
            <DeleteOutlineOutlinedIcon />
            Eliminar
          </div>
        </div>
      </div>
    </div>
  );
};

const NoItemsCarrito = () => {
  return <p>No tienen nigun item agregado</p>;
};
