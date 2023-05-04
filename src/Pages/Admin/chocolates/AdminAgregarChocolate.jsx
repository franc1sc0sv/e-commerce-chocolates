import { useForm } from "react-hook-form";
import { useApiConfig } from "../../../hooks/useApiConfig";
import { useState } from "react";
import { axiosClient } from "../../../config/axiosClient";
import ButtonLink from "../../../Components/ButtonLink";

const AdminAgregarChocolate = () => {
  const config = useApiConfig();
  const { register, handleSubmit } = useForm();
    
  const [loading, setLoading] = useState(false);
  const [exito, setExito] = useState(false);
  const [mensajeError, setError] = useState(false);

  const goodSubmit = (e)=>{
   
    //Obteniendo la imagen
    const file = e.imagen[0];
    //Creando un lector de imagenes
    const reader = new FileReader();
    //Crear un evento que detecte cuando termine de leer los archivos
    reader.onload = async ()=>{
        //Imagen en forma de string
        const fileBase64 = reader.result;
        
        //Enviar el payload(json) al formulario
        e.imagen = fileBase64;
        
        try {
            setLoading(true);
            await axiosClient.post("chocolates", e, config);
            setLoading(false);
            setExito(true);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    //Leyendo la imagen
    reader.readAsDataURL(file);
  }

  const badSubmit = ()=>{
    setError("Completa todos los campos !");
  }



  if(exito) return (
    <div className="bg-white p-4 flex flex-col rounded-lg gap-5">
        <h2 className="text-green-500">Chocolate Creado !</h2>

        <ButtonLink to={"/admin/chocolates"}>Ir a chocolates</ButtonLink>
    </div>
  )

  return (
    <form onSubmit={handleSubmit(goodSubmit,badSubmit)} className="bg-white p-4 rounded-lg">
      <h2 className="font-bold text-2xl mb-5">Agregar Chocolate</h2>
      {
        mensajeError && (<p className="font-bold text-red-600">{mensajeError}</p>)
      }
      <Input
        input={register("nombre", {required: true})}
        nombre={"Nombre"}
        type={"text"}
        placeholder={"Nombre del chocolate"}
      />
      <Input
        input={register("precio", {required: true})}
        nombre={"Precio"}
        type={"number"}
        placeholder={"Precio del chocolate"}
      />
      <Input
        input={register("imagen", {required: true})}
        nombre={"Imagen"}
        type={"file"}
        placeholder={"Precio del chocolate"}
      />
      <Input
        input={register("marca", {required: true})}
        nombre={"Marca"}
        type={"text"}
        placeholder={"Marca del chocolate"}
      />

      <button
        disabled={!!loading}
        className="bg-black rounded-md p-2 text-white mt-4 hover:bg-opacity-80 transition-all w-full font-bold"
        type="submit"
      >{
        loading
        ? 'Creando...'
        : 'Crear chocolate'
      }
      </button>
    </form>
  );
};

const Input = ({ nombre, placeholder, type,input }) => {
  return (
    <div className="flex-col flex gap-2">
      <label htmlFor="">{nombre}</label>
      <input
        {...input}
        step={"any"}
        className="border border-gray-300 outline-none rounded-md p-2"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default AdminAgregarChocolate;
