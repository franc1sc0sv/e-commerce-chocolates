import { Link } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useForm } from "react-hook-form";

import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { realizarCompra } from "../api/comprar";

export const Pago = () => {
  const { productos } = useContext(CarritoContext);
  const total = productos.reduce(
    (total, accum) => total + accum.precio * accum.cantidad,
    0
  );
  const { handleSubmit, register } = useForm();
  const succesSubmit = async (data) => {
    try {
      const datos = await realizarCompra({ chocolatesFinales, cajasFinales });
      console.log(datos);
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  const chocolatesFinales = productos
    .filter((x) => {
      return x.tipo === "chocolate";
    })
    .map((x) => {
      return { id: x.id, cantidad: x.cantidad, tipo: x.tipo };
    });

  const cajasFinales = productos
    .filter((x) => {
      return x.tipo === "caja";
    })
    .map((x) => {
      return { id: x.id, cantidad: x.cantidad, tipo: x.tipo };
    });

  return (
    <HomeLayout>
      <main className="flex flex-col w-[90%] gap-10 p-3 mx-auto">
        <Link
          to="/carrito"
          className=" bg-white px-10 flex font-bold text-lg w-fit gap-3 border border-primary text-center  py-[10px] rounded font-Outfit text-primary hover:bg-primary hover:text-white duration-[500ms] ease-in-out"
        >
          <ShoppingCartOutlinedIcon />
          Regresar al carrito
        </Link>

        <form
          className="w-full flex gap-10 h-[20rem]"
          onSubmit={handleSubmit(succesSubmit)}
        >
          <div className="flex justify-center gap-5 py-10 overflow-y-auto border basis-full border-strokeBox rounded-xl">
            <div className="flex flex-col items-center justify-center w-full gap-4 px-20">
              <div className="flex items-center w-full gap-3">
                <CreditCardOutlinedIcon />
                <p className="text-2xl font-bold font-Montserrat">
                  Completa tu informacion de pago
                </p>
              </div>

              <div className="flex flex-col w-full gap-4">
                <div className="relative w-full">
                  <p className="absolute text-xs font-medium left-11 top-2 font-Inter ">
                    Nombre completo
                  </p>
                  <PersonOutlinedIcon className="absolute top-[50%] transform -translate-y-1/2 left-3 text-secundary" />

                  <input
                    type="text"
                    {...register("nombre", { required: true })}
                    placeholder="Juan Pepe"
                    className="w-full pt-5 pb-2 text-sm font-light border rounded-lg h-14 px-11 border-secundary placeholder:text-placeHolder font-Inter placeholder:text-sm"
                  />
                </div>

                <div className="flex gap-2">
                  <div className="relative w-full">
                    <p className="absolute text-xs font-medium left-11 top-2 font-Inter ">
                      Numero de tarjeta{" "}
                    </p>
                    <CreditCardOutlinedIcon className="absolute top-[50%] transform -translate-y-1/2 left-3 text-secundary" />

                    <input
                      {...register("numTarjeta", { required: true })}
                      type="text"
                      placeholder="4734167882567854"
                      className="w-full pt-5 pb-2 text-sm font-light border rounded-lg h-14 px-11 border-secundary placeholder:text-placeHolder font-Inter placeholder:text-sm"
                    />
                  </div>

                  <div className="relative w-full">
                    <p className="absolute text-xs font-medium left-11 top-2 font-Inter ">
                      Expiración MM/YY{" "}
                    </p>
                    <CalendarMonthOutlinedIcon className="absolute top-[50%] transform -translate-y-1/2 left-3 text-secundary" />

                    <input
                      {...register("date", { required: true })}
                      type="month"
                      className="w-full pt-5 pb-2 text-sm font-light border rounded-lg h-14 px-11 border-secundary placeholder:text-placeHolder font-Inter placeholder:text-sm"
                    />
                  </div>

                  <div className="relative w-full">
                    <p className="absolute text-xs font-medium left-11 top-2 font-Inter ">
                      CVC
                    </p>
                    <CreditCardOutlinedIcon className="absolute top-[50%] transform -translate-y-1/2 left-3 text-secundary" />

                    <input
                      {...register("cvc", { required: true })}
                      type="text"
                      placeholder="161"
                      className="w-full pt-5 pb-2 text-sm font-light border rounded-lg h-14 px-11 border-secundary placeholder:text-placeHolder font-Inter placeholder:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex  justify-between flex-col items-center justify- w-[35rem] p-10 border font-Montserrat border-strokeBox rounded-xl gap-7">
            <div className="flex flex-col w-full gap-3">
              <button
                type="submit"
                className=" bg-white font-bold text-lg w-full gap-3 border border-primary text-center  py-[10px] rounded font-Outfit text-primary hover:bg-primary hover:text-white duration-[500ms] ease-in-out"
              >
                Confirmar y pagar
              </button>

              <div className="w-full">
                <p className="self-end text-xl font-bold font-SourceCodePro">
                  Resumen de la orden
                </p>
                <div className="flex justify-between w-full gap-3">
                  <p className="text-sm font-light break-all font-SourceCodePro">
                    items({productos.length})
                  </p>
                  <p className="text-sm font-light break-all font-SourceCodePro">
                    ${total}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between w-full">
              <p className="text-2xl font-bold font-Montserrat">
                Total de la orden{" "}
              </p>
              <p className="text-2xl font-bold font-Montserrat">${total} </p>
            </div>
          </div>
        </form>
      </main>
    </HomeLayout>
  );
};
