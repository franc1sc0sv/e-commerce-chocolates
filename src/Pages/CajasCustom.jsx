import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";

import { Box } from "../Components/Box";
import ButtonLink from "../Components/ButtonLink";
import { useApiConfig } from "../hooks/useApiConfig";
import { axiosClient } from "../config/axiosClient";

import HomeLayout from "../layout/HomeLayout";
import { CarritoContext } from "../context/CarritoContext";

export const CajasCustom = () => {
  const { setProductos } = useContext(CarritoContext);
  const config = useApiConfig();
  const [cajas, setCajas] = useState([]);

  const [modal, setModal] = useState(false);
  const [id, setChocolateID] = useState();

  const hideModal = () => {
    setModal(false);
  };
  const showModal = (id) => {
    setChocolateID(id);
    setModal(true);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosClient.get(
          `cajas-chocolate/miscajas`,
          config
        );
        setCajas(data);
      } catch (error) {}
    })();
  }, []);

  return (
    <HomeLayout>
      <main className="w-full">
        <Box>
          <h1 className="mb-5 text-2xl font-bold">Caja de cajas</h1>

          <ButtonLink to={"/cajascustom/agregar"}>Agregar Caja</ButtonLink>

          <Cajas cajas={cajas} showModal={showModal} />
        </Box>

        {modal && (
          <ModalEliminar
            setProductos={setProductos}
            cajas={cajas}
            setCajas={setCajas}
            id={id}
            hideModal={hideModal}
          />
        )}
      </main>
    </HomeLayout>
  );
};

const Cajas = ({ cajas, showModal }) => {
  return (
    <div className="flex flex-col gap-6 my-5">
      {cajas.map((caja) => (
        <CajaField key={caja.id} caja={caja} showModal={showModal} />
      ))}
    </div>
  );
};

const CajaField = ({ caja, showModal }) => {
  const { id, nombre, precio, chocolates } = caja;

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-start gap-10">
        <p className="text-xl font-bold">{id}</p>
        <div>
          <p className="text-2xl font-bold">{nombre}</p>
          <div>
            {chocolates.map((chocolate) => (
              <p className="font-bold text-gray-400" key={chocolate.id}>
                {chocolate.nombre}
              </p>
            ))}
          </div>
        </div>
        <p className="text-xl font-bold text-gray-400">${precio}</p>
      </div>

      <div className="flex gap-4">
        <Link to={"/cajascustom/editar/" + id}>
          <MdEdit size={28} />
        </Link>

        <MdDelete
          className="cursor-pointer"
          onClick={() => {
            showModal(id);
          }}
          size={28}
        />
      </div>
    </div>
  );
};

const ModalEliminar = ({ cajas, id, hideModal, setCajas, setProductos }) => {
  const [loading, setLoading] = useState(false);
  const config = useApiConfig();

  const deleteChocolate = async () => {
    setLoading(true);
    await axiosClient.delete("cajas-chocolate/" + id, config);
    setCajas(cajas.filter((caja) => caja.id !== id));
    hideModal(false);
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative z-20 p-4 bg-white rounded-md">
        <div className="mb-5">
          <h2 className="text-2xl font-bold">
            Desea eliminar este chocolate ?
          </h2>
          <p className="font-bold text-gray-400">
            {cajas.filter((caja) => caja.id === id)[0].nombre}
          </p>
        </div>
        <div className="flex justify-between w-full">
          <button
            onClick={deleteChocolate}
            disabled={loading}
            className="px-6 py-1 font-bold text-white bg-red-600 border border-red-600 rounded-md"
          >
            {loading ? "Borrando..." : "Borrar"}
          </button>
          <button
            onClick={() => {
              hideModal();
            }}
            className="px-6 py-1 font-bold text-gray-500"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
