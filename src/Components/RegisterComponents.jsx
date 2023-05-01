import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import { InputText } from "../Components/InputText";
import { InputPassword } from "../Components/InputPassword";
import { ButtonsForms } from "../Components/ButtonsForms";

import { Link } from "react-router-dom";
import { useForm, useFormState } from "react-hook-form";

import { useContext, useEffect } from "react";
import { RegisterContext } from "../context/RegisterContext";
import { AlertsContext } from "../context/AlertsContext";

import { useRegister } from "../hooks/useRegister";
// import { registerUser } from "../api/auth";
// import { useState } from "react";

const FormDetails = () => {
  const { form, setForm } = useContext(RegisterContext);

  const { handleSubmit, control } = useForm();

  const { errors } = useFormState({ control });

  const formSucces = (data) => {
    const formCopy = { ...form };

    formCopy.selectedIndex = 1;
    formCopy.steps.details.valid = true;
    formCopy.steps.details.dirty = false;

    formCopy.steps.details.value.name = data.name;
    formCopy.steps.details.value.email = data.email;
    formCopy.steps.details.value.password = data.password;

    setForm(() => formCopy);
  };
  return (
    <form
      className="flex flex-col items-center justify-center w-[100%] gap-5"
      onSubmit={handleSubmit(formSucces)}
    >
      <InputText
        Icon={EmailOutlinedIcon}
        placeHolder="Juan Pepe"
        text="Nombre completo"
        name="name"
        control={control}
      />

      <InputText
        Icon={PersonIcon}
        placeHolder="pepitoxD@gmail.com"
        text="Correo electronico"
        name="email"
        control={control}
      />
      <InputPassword control={control} />

      <ButtonsForms />
    </form>
  );
};

const FormExtraData = () => {
  const { form, setForm } = useContext(RegisterContext);
  const { setOpen, setSeverity, setMessage } = useContext(AlertsContext);
  const { isLoading, error, registerProceso, isValidLastForm } = useRegister();

  const { handleSubmit, control } = useForm();
  const { errors } = useFormState({ control });

  useEffect(() => {
    if (error && !isLoading) {
      setOpen(true);
      setMessage(error);
      setSeverity("warning");
    }
  }, [isLoading, error]);

  const formSucces = (data) => {
    if (!isValidLastForm) {
      console.log("CHISTOSO");
      return;
    }
    const formCopy = { ...form };
    formCopy.selectedIndex = 1;

    formCopy.steps.extraData.valid = true;
    formCopy.steps.extraData.dirty = false;

    formCopy.steps.extraData.value.adress = data.adress;
    formCopy.steps.extraData.value.phone = data.phone;

    setForm(() => formCopy);

    registerProceso({ data });
  };

  return (
    <form
      className="flex flex-col items-center justify-center w-[100%] gap-5"
      onSubmit={handleSubmit(formSucces)}
    >
      <InputText
        Icon={HomeOutlinedIcon}
        placeHolder="Casa 28, Bosques de la paz, Soyapango"
        text="Direccion"
        name="adress"
        control={control}
      />
      <InputText
        Icon={LocalPhoneOutlinedIcon}
        placeHolder="+50360698574"
        text="Telefono"
        name="phone"
        control={control}
      />

      <ButtonsForms isLoading={isLoading} />
    </form>
  );
};

export const MultiStepsContainer = () => {
  const { form } = useContext(RegisterContext);
  const selectedIndex = form.selectedIndex;
  const translate = ["0", "-50%"];

  return (
    <>
      <div className="w-full overflow-hidden ">
        <div
          className="w-[200%] flex justify-center items-center transition-all ease-in-out duration-200"
          style={{ transform: `translateX(${translate[selectedIndex]})` }}
        >
          <FormDetails />

          <FormExtraData />
        </div>
      </div>
    </>
  );
};

export const Back = () => {
  const { form, setForm } = useContext(RegisterContext);
  const selectedIndex = form.selectedIndex;

  const handleClick = () => {
    setForm((prevState) => ({
      ...prevState,
      selectedIndex: 0,
    }));
  };

  return (
    selectedIndex === 1 && (
      <KeyboardReturnIcon
        className="absolute cursor-pointer left-5 top-5"
        onClick={handleClick}
      />
    )
  );
};

export const BarraProgresiva = () => {
  const { form, setForm } = useContext(RegisterContext);
  const selectedIndex = form.selectedIndex;

  const withBar = ["0%", "50%", "100%"];
  return (
    <div className="flex flex-col items-end justify-center w-64 gap-2">
      <p className="text-sm font-light text-secundary font-Outfit">
        <span className="font-medium text-primary">
          Paso {selectedIndex + 1 > 2 ? "2" : "1"}
        </span>{" "}
        de 2
      </p>
      <div className="relative flex items-center w-full h-2 ">
        <div
          className="absolute h-3 rounded-full bg-primary "
          style={{ width: withBar[selectedIndex] }}
        ></div>
        <div className="w-full h-2 rounded-full bg-progresiveBar"> </div>
      </div>
    </div>
  );
};

export const YaTienesUnaCuenta = () => {
  return (
    <p className="text-sm font-light font-Inter text-secundary">
      Si ya tienes una cuenta{" "}
      <Link to={"/iniciarSesion"} className="font-medium text-primary">
        Inicia Sesion
      </Link>
    </p>
  );
};
