import { Link } from "react-router-dom";
import {BiUserCircle} from "react-icons/bi";
import "../styles/background_gray.css";
import { useContext, useEffect, useState } from "react";
import { axiosClient } from "../config/axiosClient";
import { AuthContext } from "../context/AuthContext";
import ButtonLink from "../Components/ButtonLink";
export default function Admin() {
  const { user } = useContext(AuthContext);

  const [userFeedback, setUserFeedBack] = useState([]);

  useEffect(()=>{
    (async()=>{
      const {data} = await axiosClient("feedback", {
        headers: {
          Authorization: 'Bearer ' + user.token
        }
      })
      setUserFeedBack(data);
    })()
  },[])

  return (
    <>
        <Box>
          <h1 className="font-bold text-xl">Administrador E-Commerce</h1>
          <p className="text-gray-400">
            Bienvenido al panel principal de administracion del E-Commerce de
            chocolateria
          </p>

          <div className="mt-5">
            <h3 className="font-bold text-lg">Acciones Rapidas</h3>

            <div className="flex gap-2 mt-4">
              <ButtonLink to={"/admin/chocolates/agregar"}>Agregar Chocolate</ButtonLink>
              <ButtonLink>Crear Caja de Chocolates</ButtonLink>
            </div>
          </div>
        </Box>

        <Box>
          <h2 className="font-bold text-xl">Feedback del E-commerce</h2>
          
          <div className="mt-5 flex flex-col gap-4 max-h-60 overflow-auto scroll-p-2">
            {
              userFeedback.map(
                feedback => <FeedBackUser key={feedback.id} {...feedback}/>
              )
            }
          </div>
        </Box>
    </>
  );
};

const FeedBackUser = ({nombre, rating, comentario})=>{
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <BiUserCircle size={50}/>
        <p className="font-bold text-xl">{nombre}</p>
        <p>{rating}/5</p>
      </div>
      <p>{comentario}</p>
    </div>
  ) 
}

const Box = ({ children }) => {
  return <div className="bg-white w-full rounded-lg p-6">{children}</div>;
};
