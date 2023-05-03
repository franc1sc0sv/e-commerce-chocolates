import HomeLayout from "../layout/HomeLayout";
import { ProductosCajas } from "../Components/ProductosCajas";
import { FiltersCajas } from "../Components/FiltersCajas";

import { useCajas } from "../hooks/useCajas";
import { useFiltersCajas } from "../hooks/useFiltersCajas";

export const Cajas = () => {
  const { cajas, error, isLoading } = useCajas();
  const { filterCajas } = useFiltersCajas();
  const filteredCajas = filterCajas({ cajas });

  return (
    <>
      <HomeLayout>
        <main className="flex w-full gap-2 p-3">
          <ProductosCajas cajas={filteredCajas} isLoading={isLoading} />
          <FiltersCajas />
        </main>
      </HomeLayout>
    </>
  );
};
