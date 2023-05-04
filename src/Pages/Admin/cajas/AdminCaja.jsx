import { Box } from "../../../Components/Box";
import ButtonLink from "../../../Components/ButtonLink";
import { MdDelete, MdEdit } from "react-icons/md";
import { useApiConfig } from "../../../hooks/useApiConfig";
import { useEffect, useState } from "react";
import { axiosClient } from "../../../config/axiosClient";
import { Link } from "react-router-dom";

const AdminCaja = () => {
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
        const { data } = await axiosClient.get("cajas-chocolate", config);
        setCajas(data);
      } catch (error) {}
    })();
  }, []);


  return (
    <main className="w-full">
      <Box>
        <h1 className="font-bold text-2xl mb-5">Caja de cajas</h1>

        <ButtonLink to={"/admin/caja-chocolate/agregar"}>
          Agregar Caja
        </ButtonLink>

        <Cajas cajas={cajas} showModal={showModal} />
      </Box>

      {modal && (
        <ModalEliminar 
            cajas={cajas} 
            setCajas={setCajas}
            id={id} 
            hideModal={hideModal} />
      )}
    </main>
  );
};

const Cajas = ({ cajas, showModal }) => {
  return (
    <div className="my-5 flex flex-col gap-6">
      {cajas.map((caja) => (
        <CajaField
          key={caja.id}
          caja={caja}
          showModal={showModal}
        />
      ))}
    </div>
  );
};

const CajaField = ({ caja, showModal }) => {
  const { id,  nombre, precio,chocolates } = caja;

  return (
    <div className="flex items-center gap-4 justify-between">
      <div className="flex items-start  gap-10">
        <p className="font-bold text-xl">{id}</p>
        <div>
          <p className="font-bold text-2xl">{nombre}</p>
          <div>
            {
              chocolates.map(chocolate => <p className="text-gray-400 font-bold" key={chocolate.id}>{chocolate.nombre}</p>)
            }
          </div>
        </div>
        <p className="font-bold text-gray-400 text-xl">${precio}</p>
      </div>

      <div className="flex gap-4">
        <Link to={"/admin/caja-chocolate/editar/" + id}>
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

const ModalEliminar = ({ cajas, id, hideModal,setCajas }) => {
  const [loading,setLoading] = useState(false);
  const config = useApiConfig();

  const deleteChocolate = async()=>{
    setLoading(true);
    await axiosClient.delete("cajas-chocolate/"+id,config);
    setCajas(cajas.filter((caja) => caja.id !== id))
    hideModal(false);
  }

  return (
    <div className="fixed flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70">
      <div className="relative z-20 bg-white p-4 rounded-md">
        <div className="mb-5">
          <h2 className="font-bold text-2xl">
            Desea eliminar este chocolate ?
          </h2>
          <p className="text-gray-400 font-bold">
            {cajas.filter((caja) => caja.id === id)[0].nombre}
          </p>
        </div>
        <div className="flex w-full justify-between">
          <button 
            onClick={deleteChocolate}
            disabled={loading} 
            className="bg-red-600 font-bold rounded-md border border-red-600 text-white px-6 py-1">
            {
                loading 
                ? 'Borrando...'
                : 'Borrar'
            }
          </button>
          <button
            onClick={() => {
              hideModal();
            }}
            className="font-bold text-gray-500 px-6 py-1"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCaja;
