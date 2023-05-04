import { Box } from "../../../Components/Box";
import ButtonLink from "../../../Components/ButtonLink";
import { MdDelete, MdEdit } from "react-icons/md";
import { useApiConfig } from "../../../hooks/useApiConfig";
import { useEffect, useState } from "react";
import { axiosClient } from "../../../config/axiosClient";
import { Link } from "react-router-dom";

const AdminChocolates = () => {
  const config = useApiConfig();
  const [chocolates, setChocolates] = useState([]);

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
        const { data } = await axiosClient.get("chocolates", config);
        setChocolates(data);
      } catch (error) {}
    })();
  }, []);

  return (
    <main className="w-full">
      <Box>
        <h1 className="font-bold text-2xl mb-5">Chocolates</h1>

        <ButtonLink to={"/admin/chocolates/agregar"}>
          Agregar Chocolates
        </ButtonLink>

        <Chocolates chocolates={chocolates} showModal={showModal} />
      </Box>

      {modal && (
        <ModalEliminar 
            chocolates={chocolates} 
            setChocolates={setChocolates}
            id={id} 
            hideModal={hideModal} />
      )}
    </main>
  );
};

const Chocolates = ({ chocolates, showModal }) => {
  return (
    <div className="my-5 flex flex-col gap-6">
      {chocolates.map((chocolate) => (
        <ChocolateField
          key={chocolate.id}
          chocolate={chocolate}
          showModal={showModal}
        />
      ))}
    </div>
  );
};

const ChocolateField = ({ chocolate, showModal }) => {
  const { id, imagen, nombre, precio } = chocolate;
  const imgURL = import.meta.env.VITE_API_URL + imagen;

  return (
    <div className="flex items-center gap-4 justify-between">
      <div className="grid grid-cols-[min-content_max-content_30ch_1fr] items-center  gap-4">
        <p className="font-bold text-xl">{id}</p>
        <img
          src={imgURL}
          alt="Imagen Chocolate"
          width={120}
          height={120}
          className="rounded-md"
        />
        <p className="font-bold text-2xl">{nombre}</p>
        <p className="font-bold text-gray-400 text-xl">${precio}</p>
      </div>

      <div className="flex gap-4">
        <Link to={"/admin/chocolates/editar/" + id}>
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

const ModalEliminar = ({ chocolates, id, hideModal,setChocolates }) => {
  const [loading,setLoading] = useState(false);
  const config = useApiConfig();

  const deleteChocolate = async()=>{
    setLoading(true);
    await axiosClient.delete("chocolates/"+id,config);
    setChocolates(chocolates.filter((chocolate) => chocolate.id !== id))
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
            {chocolates.filter((chocolate) => chocolate.id === id)[0].nombre}
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

export default AdminChocolates;
