import { Children, createContext, useState } from "react";

export const FiltersChocolatesContext = createContext();

export const FiltersChocolatesProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [valuePrice, setPriceValue] = useState([0, 100]);
  const [order, setOrder] = useState("defecto");
  // const [brands, setBrands] = useState({});

  return (
    <FiltersChocolatesContext.Provider
      value={{
        valuePrice,
        setPriceValue,
        order,
        setOrder,
        search,
        setSearch,
      }}
    >
      {children}
    </FiltersChocolatesContext.Provider>
  );
};
