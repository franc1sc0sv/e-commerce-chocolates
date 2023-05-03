import { createContext, useState } from "react";

export const FiltersCajasContext = createContext();

export const FiltersCajasProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [valuePrice, setPriceValue] = useState([0, 100]);
  const [order, setOrder] = useState("defecto");
  const [minChocolates, setMinChocolates] = useState(30);

  return (
    <FiltersCajasContext.Provider
      value={{
        valuePrice,
        setPriceValue,
        order,
        setOrder,
        search,
        setSearch,
        minChocolates,
        setMinChocolates,
      }}
    >
      {children}
    </FiltersCajasContext.Provider>
  );
};
