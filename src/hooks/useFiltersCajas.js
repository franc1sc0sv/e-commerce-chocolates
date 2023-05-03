import { useContext } from "react";
import { FiltersCajasContext } from "../context/FiltersCajasContext";

// Función para ordenar cajas por nombre (orden alfabético ascendente)
const orderByName = ({ cajas }) => {
  return cajas.sort((a, b) => a.nombre.localeCompare(b.nombre));
};

// Función para ordenar cajas del mayor a menor
const orderByHighest = ({ cajas }) => {
  return cajas.sort((a, b) => b.precio - a.precio);
};

// Función para ordenar cajas del menor a mayor
const filterByMinor = ({ cajas }) => {
  return cajas.sort((a, b) => a.precio - b.precio);
};

const filterByPriceMinMax = ({ cajas, valuePrice }) => {
  const [min, max] = valuePrice;
  return cajas.filter((caja) => {
    return caja.precio >= min && caja.precio <= max;
  });
};

const filterByAmountChoc = ({ cajas, minChocolates }) => {
  return cajas.filter((caja) => {
    const { chocolates } = caja;

    const cantidadChocolates = chocolates
      .map((chocolate) => {
        return parseInt(chocolate.cantidad);
      })
      .reduce((accumulator, currentValue) => accumulator + currentValue);

    return cantidadChocolates <= minChocolates;
  });
};

const ORDER_CJAS = {
  nombre: orderByName,
  mayor: orderByHighest,
  menor: filterByMinor,
};

export const useFiltersCajas = () => {
  const {
    valuePrice,
    setPriceValue,
    order,
    setOrder,
    search,
    setSearch,
    minChocolates,
    setMinChocolates,
  } = useContext(FiltersCajasContext);

  const handleClickReset = () => {
    setOrder("defecto");
    setPriceValue([0, 100]);
    setSearch("");
    setMinChocolates(30);
  };

  const filterCajas = ({ cajas }) => {
    let filteredData = [...cajas];

    if (search !== "") {
      filteredData = filteredData.filter((chocolate) => {
        return chocolate.nombre.toLowerCase().includes(search.toLowerCase());
      });
    }

    if (order !== "defecto") {
      filteredData = ORDER_CJAS[order]({ cajas: filteredData });
    }

    filteredData = filterByAmountChoc({
      cajas: filteredData,
      minChocolates,
    });

    filteredData = filterByPriceMinMax({
      cajas: filteredData,
      valuePrice,
    });

    return filteredData;
  };

  return {
    order,
    valuePrice,
    setPriceValue,
    setOrder,
    filterCajas,
    search,
    setSearch,
    minChocolates,
    setMinChocolates,
    handleClickReset,
  };
};
