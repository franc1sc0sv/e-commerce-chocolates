import { useContext } from "react";
import { FiltersChocolatesContext } from "../context/FiltersChocolatesContext";

// Función para ordenar chocolates por marca (orden alfabético ascendente)
const orderByBrand = ({ chocolates }) => {
  return chocolates.sort((a, b) => a.marca.localeCompare(b.marca));
};

// Función para ordenar chocolates por nombre (orden alfabético ascendente)
const orderByName = ({ chocolates }) => {
  return chocolates.sort((a, b) => a.nombre.localeCompare(b.nombre));
};

// Función para ordenar chocolates del mayor a menor
const orderByHighest = ({ chocolates }) => {
  return chocolates.sort((a, b) => b.precio - a.precio);
};

// Función para ordenar chocolates del menor a mayor
const filterByMinor = ({ chocolates }) => {
  return chocolates.sort((a, b) => a.precio - b.precio);
};

const filterByPriceMinMax = ({ chocolates, valuePrice }) => {
  const [min, max] = valuePrice;
  return chocolates.filter((chocolate) => {
    return chocolate.precio >= min && chocolate.precio <= max;
  });
};

const ORDER_CHOCOLATES = {
  marca: orderByBrand,
  nombre: orderByName,
  mayor: orderByHighest,
  menor: filterByMinor,
};

export const useFiltersChocolates = () => {
  const { valuePrice, setPriceValue, order, setOrder, search, setSearch } =
    useContext(FiltersChocolatesContext);

  const handleClickReset = () => {
    setOrder("defecto");
    setPriceValue([0, 100]);
    setSearch("");
  };

  const filterChocolates = ({ chocolates }) => {
    let filteredData = [...chocolates];

    if (search !== "") {
      filteredData = filteredData.filter((chocolate) => {
        return chocolate.nombre.toLowerCase().includes(search.toLowerCase());
      });
    }

    if (order !== "defecto") {
      filteredData = ORDER_CHOCOLATES[order]({ chocolates: filteredData });
    }

    filteredData = filterByPriceMinMax({
      chocolates: filteredData,
      valuePrice,
    });

    return filteredData;
  };

  return {
    order,
    valuePrice,
    setPriceValue,
    setOrder,
    filterChocolates,
    search,
    setSearch,
    handleClickReset,
  };
};
