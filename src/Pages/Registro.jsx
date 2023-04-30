import { FormsLayout } from "../layout/FormsLayout";
import {
  Back,
  MultiStepsContainer,
  BarraProgresiva,
  YaTienesUnaCuenta,
} from "../Components/RegisterComponents";

import { RegisterProvider } from "../context/RegisterContext";

export const Registro = () => {
  return (
    <>
      <RegisterProvider>
        <FormsLayout h={"550px"} text={"Crea tu cuenta"}>
          <Back />
          <BarraProgresiva />
          <MultiStepsContainer />
          <YaTienesUnaCuenta />
        </FormsLayout>
      </RegisterProvider>
    </>
  );
};
