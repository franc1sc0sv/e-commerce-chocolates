import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import { InputText } from "../Components/InputText";
import { InputPassword } from "../Components/InputPassword";
import { FormsLayout } from "../layout/FormsLayout";
import { ButtonsForms } from "../Components/ButtonsForms";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useLogin } from "../hooks/useLogin";

import { AlertsContext } from "../context/AlertsContext";
import { useContext, useEffect } from "react";

export const IniciarSesion = () => {
  return (
    <FormsLayout text={"Inicia Sesion"}>
      <Formulario />
      <NoTienesCuenta />
    </FormsLayout>
  );
};

const Formulario = () => {
  const {setOpen,setMessage,setSeverity} = useContext(AlertsContext)
  const { handleSubmit, control } = useForm();

  const { error, isLoading, loginProcess } = useLogin();

  const succesSubmit = (data) => {
    loginProcess({ datos: data });
  };

  useEffect(() => {
    if (error && !isLoading) {
      setOpen(true);
      setMessage(error);
      setSeverity("warning");
    }
  }, [isLoading, error]);

  return (
    <form
      className="flex flex-col items-center justify-center w-[100%] gap-5"
      onSubmit={handleSubmit(succesSubmit)}
    >
      <InputText
        Icon={EmailOutlinedIcon}
        placeHolder="pepitoxD@gmail.com"
        text="Correo electronico"
        name="email"
        control={control}
      />

      <InputPassword control={control} />

      <ButtonsForms isLoading={isLoading} />
    </form>
  );
};

const NoTienesCuenta = () => {
  return (
    <p className="text-sm font-light font-Inter text-secundary">
      Si no tienes una cuenta
      <Link to={"/registro"} className="font-medium text-primary">
        registrate
      </Link>
    </p>
  );
};
