import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import { InputText } from "../Components/InputText";
import { InputPassword } from "../Components/InputPassword";
import { ButtonsForms } from "../Components/ButtonsForms";

import { Link } from "react-router-dom";

import { useContext, useEffect } from "react";
import { RegisterContext } from "../context/RegisterContext";
import { useForm, useFormState } from "react-hook-form";

const AccountCreated = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[100%] gap-5">
      <p>Congratulations your account has been created</p>
    </div>
  );
};

const FormDetails = () => {
  const { form, setForm } = useContext(RegisterContext);

  const { handleSubmit, control } = useForm();

  const { isDirty, errors } = useFormState({ control });

  useEffect(() => {
    setForm((prevState) => ({
      ...prevState,
      steps: {
        ...prevState.steps,
        details: {
          ...prevState.steps.details,
          dirty: isDirty,
        },
      },
    }));
  }, [isDirty, setForm]);

  const formSucces = (data) => {
    setForm((prevState) => ({
      selectedIndex: form.selectedIndex + 1,
      steps: {
        ...prevState.steps,
        details: {
          ...prevState.steps.details,
          valid: true,
          dirty: false,
          value: {
            name: data.name,
            username: data.username,
            email: data.email,
            password: data.password,
          },
        },
      },
    }));
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
        placeHolder="pepitoOn60Hz"
        text="Nombre de usuario"
        name="username"
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
  const isValidLastForm = form.steps.details.valid;
  const { handleSubmit, control } = useForm();

  const { isDirty, errors } = useFormState({ control });

  useEffect(() => {
    setForm((prevState) => ({
      ...prevState,
      steps: {
        ...prevState.steps,
        extraData: {
          ...prevState.steps.details,
          dirty: isDirty,
        },
      },
    }));
  }, [isDirty, setForm]);

  const formSucces = (data) => {
    if (!isValidLastForm) {
      console.log("CHISTOSO");
      return;
    }

    setForm((prevState) => ({
      selectedIndex: form.selectedIndex + 1,
      steps: {
        ...prevState.steps,
        extraData: {
          valid: true,
          dirty: false,
          ...prevState.steps.details,
          value: {
            adress: data.adress,
            phone: data.phone,
          },
        },
      },
    }));
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

      <ButtonsForms />
    </form>
  );
};

export const MultiStepsContainer = () => {
  const { form, setForm } = useContext(RegisterContext);
  const selectedIndex = form.selectedIndex;
  const translate = ["0", "-33.33%", "-66.66%"];

  return (
    <>
      <div className="w-full overflow-hidden ">
        <div
          className="w-[300%] flex justify-center items-center transition-all ease-in-out duration-200"
          style={{ transform: `translateX(${translate[selectedIndex]})` }}
        >
          <FormDetails />

          <FormExtraData />
          <AccountCreated />
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
