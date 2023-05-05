import { BiUserCircle } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { axiosClient } from "../../config/axiosClient";
import { AuthContext } from "../../context/AuthContext";
import ButtonLink from "../../Components/ButtonLink";
import { Box } from "../../Components/Box";

export default function Admin() {
  const { user } = useContext(AuthContext);

  const [userFeedback, setUserFeedBack] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axiosClient("feedback", {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      });
      setUserFeedBack(data);
    })();
  }, []);

  return (
    <>
      <Box>
        <h1 className="text-xl font-bold">Administrador E-Commerce</h1>
        <p className="text-gray-400">
          Bienvenido al panel principal de administracion del E-Commerce de
          chocolateria
        </p>

        <div className="mt-5">
          <h3 className="text-lg font-bold">Acciones Rapidas</h3>

          <div className="flex gap-2 mt-4">
            <ButtonLink to={"/admin/chocolates/agregar"}>
              Agregar Chocolate
            </ButtonLink>
            <ButtonLink>Crear Caja de Chocolates</ButtonLink>
          </div>
        </div>
      </Box>

      <Box>
        <h2 className="text-xl font-bold">Feedback del E-commerce</h2>

        <div className="flex flex-col gap-4 mt-5 overflow-auto max-h-60 scroll-p-2">
          {userFeedback.map((feedback) => (
            <FeedBackUser key={feedback.id} {...feedback} />
          ))}
        </div>
      </Box>
    </>
  );
}

const FeedBackUser = ({ nombre, rating, comentario }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <BiUserCircle size={50} />
        <p className="text-xl font-bold">{nombre}</p>
        <p>{rating}/5</p>
      </div>
      <p>{comentario}</p>
    </div>
  );
};
