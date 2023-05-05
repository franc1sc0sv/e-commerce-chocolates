import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import ButtonLink from "./ButtonLink";
import { useApiConfig } from "../hooks/useApiConfig";
import { axiosClient } from "../config/axiosClient";

import { Autocomplete, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import HomeLayout from "../layout/HomeLayout";

const UserEditarCaja = () => {
  const config = useApiConfig();
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, control, setValue, reset } = useForm();

  const [caja, setCaja] = useState({});

  const [loading, setLoading] = useState(false);
  const [exito, setExito] = useState(false);
  const [mensajeError, setError] = useState(false);

  const [chocolatesloading, setChocoloading] = useState(false);
  const [chocolates, setChocolates] = useState([]);

  const goodSubmit = async (e) => {
    e.chocolates = e.chocolates.map((chocolate) => ({
      id: chocolate.id,
      cantidad: 1,
    }));

    try {
      setLoading(true);
      await axiosClient.put("cajas-chocolate/" + id, e, config);
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

  //checar si existe la caja
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosClient.get("cajas-chocolate/" + id, config);
        setCaja(data);
        reset(data);
      } catch (error) {
        navigate("/cajas");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setChocoloading(true);
        const { data } = await axiosClient.get("chocolates", config);
        setChocolates(data);
        setChocoloading(false);
      } catch (error) {
        setChocoloading(false);
      }
    })();
  }, []);

  if (!caja.id) return <p>loading...</p>;

  if (exito)
    return (
      <div className="flex flex-col gap-5 p-4 bg-white rounded-lg">
        <h2 className="text-green-500">Caja de chocolates editada !</h2>

        <ButtonLink to={"/cajas"}>Ir a Caja de chocolates</ButtonLink>
      </div>
    );

  console.log(
    caja.chocolates ? caja.chocolates.map((chocolate) => chocolate.nombre) : []
  );
  return (
    <form
      onSubmit={handleSubmit(goodSubmit, badSubmit)}
      className="p-4 bg-white rounded-lg w-96"
    >
      <h2 className="mb-5 text-2xl font-bold">Editar Caja de chocolates</h2>
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
              defaultValue={caja.chocolates}
              onChange={(e, d) => {
                setValue("chocolates", d);
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
        className="w-full p-2 mt-4 font-bold text-white transition-all bg-black rounded-md hover:bg-opacity-80"
        type="submit"
      >
        {loading ? "Editando..." : "Editar Caja de chocolates"}
      </button>
    </form>
  );
};

const Input = ({ nombre, placeholder, type, input }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="">{nombre}</label>
      <input
        {...input}
        step={"any"}
        className="p-2 border border-gray-300 rounded-md outline-none"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default UserEditarCaja;
