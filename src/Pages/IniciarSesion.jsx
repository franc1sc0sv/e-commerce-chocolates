import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { InputText } from "../Components/InputText";
import { InputPassword } from "../Components/InputPassword";
import { FormsLayout } from "../layout/FormsLayout";
import { ButtonsForms } from "../Components/ButtonsForms";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const IniciarSesion = () => {
  return (
    <FormsLayout text={"Inicia Sesion"}>
      <Formulario />
      <NoTienesCuenta />
    </FormsLayout>
  );
};

const Formulario = () => {
  const { handleSubmit, control } = useForm();
  const succesSubmit = (data) => {
    console.log(data);
  };
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

      <InputPassword
        Icon={LockOutlinedIcon}
        text="Contraseña"
        name="password"
        control={control}
      />

      <ButtonsForms />
    </form>
  );
};

const NoTienesCuenta = () => {
  return (
    <p className="text-sm font-light font-Inter text-secundary">
      Si no tienes una cuenta{" "}
      <Link to={"/registro"} className="font-medium text-primary">
        registrate
      </Link>
    </p>
  );
};
