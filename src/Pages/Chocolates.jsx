import HomeLayout from "../layout/HomeLayout";
import { FiltersChocolates } from "../Components/FiltersChocolates";
import { ProductosChocolates } from "../Components/ProductosChocolates";

import { useFiltersChocolates } from "../hooks/useFiltersChocolates";

import { useChocolates } from "../hooks/useChocolates";

export const Chocolates = () => {
  const { chocolates, error, isLoading } = useChocolates();

  const { filterChocolates } = useFiltersChocolates();
  const filteredChocolates = filterChocolates({ chocolates });
  return (
    <HomeLayout>
      <main className="flex w-full gap-2 p-3">
        <FiltersChocolates />
        <ProductosChocolates
          chocolates={filteredChocolates}
          isLoading={isLoading}
        />
      </main>
    </HomeLayout>
  );
};
