import HomeLayout from "../layout/HomeLayout";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";

export const Carrito = () => {
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
            <CardCarritos />
            <CardCarritos />
            <CardCarritos />
          </div>

          <p className="self-end text-xl font-bold font-SourceCodePro">
            Subtotal (1 items): $5.00
          </p>
        </div>

        <div className="w-[40%] h-[200px] max-w-[490px] bg-gray-300 rounded-lg p-5 flex flex-col gap-2 justify-center">
          <div className="flex items-center justify-between w-full">
            <p className="text-lg font-bold font-SourceCodePro">
              Subtotal (1 items)
            </p>
            <p className="text-6xl font-extrabold font-SourceCodePro">$5.00</p>
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

const CardCarritos = () => {
  return (
    <div className="flex p-5 rounded-lg gap-14 w- h-max bg-borderInputs">
      <div className=" w-full max-w-[270px] aspect-square h-36 bg-gray-300 rounded-lg"></div>
      <div className="w-full h-auto py-4">
        <div className="flex justify-between">
          <p className="text-xl font-bold font-SourceCodePro">
            Tus cajas de chocolates
          </p>

          <p className="text-3xl font-bold font-SourceCodePro">$2.50 </p>
        </div>

        <div className="flex gap-2">
          <div className=" flex w-40 justify-evenly text-lg gap-3 border border-primary text-center  py-[10px] rounded font-Outfit bg-white ">
            <RemoveIcon />
            <p className="font-bold">1</p>
            <AddIcon />
          </div>

          <div className=" flex items-center text-lg gap-1 border text-center  py-[10px] rounded font-Outfit cursor-pointer ">
            <DeleteOutlineOutlinedIcon />
            Eliminar
          </div>
        </div>
      </div>
    </div>
  );
};
