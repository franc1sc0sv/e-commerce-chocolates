import { Controller, useForm } from "react-hook-form";
import { useApiConfig } from "../../../hooks/useApiConfig";
import { useEffect, useState } from "react";
import { axiosClient } from "../../../config/axiosClient";
import ButtonLink from "../../../Components/ButtonLink";
import { Autocomplete, TextField } from "@mui/material";

const AdminAgregarCaja = () => {
  const config = useApiConfig();
  const { register, handleSubmit, control, setValue } = useForm();

  const [loading, setLoading] = useState(false);
  const [exito, setExito] = useState(false);
  const [mensajeError, setError] = useState(false);

  const [chocolatesloading, setChocoloading] = useState(false);
  const [chocolates, setChocolates] = useState([]);

  const goodSubmit = async (e) => {
    e.chocolates = e.chocolates.map(
      chocolate => ({
        id: chocolate.id,
        cantidad: 1
      })
    )


    try {
      setLoading(true);
      await axiosClient.post("cajas-chocolate", e, config);
      setLoading(false);
      setExito(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const badSubmit = () => {
    setError("Completa todos los campos !");
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosClient.get("chocolates", config);
        setChocolates(data);
      } catch (error) {}
    })();
  }, []);

  if (exito)
    return (
      <div className="bg-white p-4 flex flex-col rounded-lg gap-5">
        <h2 className="text-green-500">Caja de chocolates creada !</h2>

        <ButtonLink to={"/admin/caja-chocolate"}>
          Ir a Caja de chocolates
        </ButtonLink>
      </div>
    );

  return (
    <form
      onSubmit={handleSubmit(goodSubmit, badSubmit)}
      className="bg-white p-4 rounded-lg w-96"
    >
      <h2 className="font-bold text-2xl mb-5">Agregar Caja de chocolates</h2>
      {mensajeError && <p className="font-bold text-red-600">{mensajeError}</p>}

      <div className="flex flex-col gap-6">
        <Input
          input={register("nombre", { required: true })}
          nombre={"Nombre"}
          type={"text"}
          placeholder={"Nombre del chocolate"}
        />

        <Controller
          name="chocolates"
          rules={{ required: true }}
          control={control}
          render={() => (
            <Autocomplete
              multiple
              id="tags-outlined"
              options={chocolates}
              getOptionLabel={(option) => option.nombre}
              loading={chocolatesloading}
              filterSelectedOptions
              onChange={(e,d)=> {
                setValue("chocolates",d)
              }}
              renderInput={(params) => (
                <TextField {...params} label="Chocolates" />
              )}
            />
          )}
        />
      </div>

      <button
        disabled={!!loading}
        className="bg-black rounded-md p-2 text-white mt-4 hover:bg-opacity-80 transition-all w-full font-bold"
        type="submit"
      >
        {loading ? "Creando..." : "Crear Caja de chocolates"}
      </button>
    </form>
  );
};

const Input = ({ nombre, placeholder, type, input }) => {
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

export default AdminAgregarCaja;
