import { ButtonsForms } from "../Components/ButtonsForms";
import { FormsLayout } from "../layout/FormsLayout";
import {
  Back,
  MultiStepsContainer,
  BarraProgresiva,
  YaTienesUnaCuenta,
} from "../Components/RegisterComponents";

import { RegisterProvider } from "../context/RegisterContext";

import { useState } from "react";

export const Registro = () => {
  const [partForm, setPartForm] = useState(1);

  return (
    <>
      <RegisterProvider>
        <FormsLayout h={"600px"} text={"Crea tu cuenta"}>
          <Back />
          <BarraProgresiva />
          <MultiStepsContainer />
          <YaTienesUnaCuenta />
        </FormsLayout>
      </RegisterProvider>
    </>
  );
};
