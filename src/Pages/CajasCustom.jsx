import HomeLayout from "../layout/HomeLayout";

import { FormsCajasCustom } from "../Components/FormsCajasCustom";
import { ContainerCajasCustom } from "../Components/ContainerCajasCustom";

export const CajasCustom = () => {
  return (
    <HomeLayout>
      <main className="flex w-[95%] mx-auto gap-2">
        <ContainerCajasCustom />
        <FormsCajasCustom />
      </main>
    </HomeLayout>
  );
};
