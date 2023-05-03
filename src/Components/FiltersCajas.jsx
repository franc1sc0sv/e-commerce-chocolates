import SearchIcon from "@mui/icons-material/Search";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import Slider from "@mui/material/Slider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { useFiltersCajas } from "../hooks/useFiltersCajas";

function valuetext(value) {
  return `${value}°C`;
}

export const FiltersCajas = () => {
  const {
    order,
    valuePrice,
    search,
    setPriceValue,
    setOrder,
    setSearch,
    minChocolates,
    setMinChocolates,
    handleClickReset,
  } = useFiltersCajas();

  const handleChangeSelect = (event) => {
    setOrder(event.target.value);
  };

  const handleChangeMinMax = (event, newValue) => {
    setPriceValue(newValue);
  };

  const handleChangeInutPrice = (e) => {
    const price = [...valuePrice];
    const actualValue = e.target.value;
    const typeValue = e.target.id;

    const filteredValue =
      isNaN(actualValue) || actualValue === "" ? 0 : parseInt(actualValue);

    if (filteredValue < 0 || filteredValue > 100) {
      return;
    }

    if (typeValue === "min") {
      price[0] = filtere;
      dValue;
    }

    if (typeValue === "max") {
      price[1] = filteredValue;
    }

    setPriceValue(price);
  };

  const handleChangeMinChoc = (e, newValue) => {
    setMinChocolates(newValue);
  };

  const handleChangeMinChocInput = (e) => {
    const actualValue = e.target.value;

    const filteredValue =
      isNaN(actualValue) || actualValue === "" ? 0 : parseInt(actualValue);

    if (filteredValue < 0 || filteredValue > 100) {
      return;
    }
    setMinChocolates(filteredValue);
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-start max-w-xs p-10 border h-max font-Montserrat w-96 border-strokeBox rounded-xl gap-7">
      {/* search bar */}
      <div className="relative w-full bg-bgInputs ">
        <input
          onChange={handleChangeSearch}
          type="text"
          value={search}
          className="w-full px-10 py-2 border rounded-md border-borderInputs bg-bgInputs placeholder:font-normal placeholder:text-sm"
          placeholder="Busqueda"
        />
        <SearchIcon className="absolute top-[50%] left-3 transform -translate-y-1/2 text-secundary" />
      </div>

      {/* order from */}
      <div className="flex items-center w-full gap-4">
        <p className="text-lg font-bold ">Ordenar:</p>
        <Select
          onChange={handleChangeSelect}
          value={order}
          className="w-full"
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="defecto">
            <em> Por defecto</em>
          </MenuItem>
          <MenuItem value="nombre">Por nombre</MenuItem>
          <MenuItem value="mayor">
            Por precio <ArrowUpwardIcon className="text-secundary" />
          </MenuItem>
          <MenuItem value="menor">
            Por precio <ArrowDownwardIcon className="text-secundary" />
          </MenuItem>
        </Select>
      </div>

      {/* Price mim max */}
      <div className="flex flex-col justify-start w-full">
        <p className="text-lg font-bold ">Precio:</p>
        <Slider
          className="text-primary"
          getAriaLabel={() => "Temperature range"}
          value={valuePrice}
          onChange={handleChangeMinMax}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          sx={{
            color: "#282424",
          }}
        />

        <div className="flex justify-start w-full gap-3">
          <input
            onChange={handleChangeInutPrice}
            id="min"
            type="text"
            className="w-2/4 text-lg font-medium border rounded-md h-14 bg-bgInputs border-borderInputs text-[#737373] px-5 "
            value={valuePrice[0]}
          />
          <input
            onChange={handleChangeInutPrice}
            id="max"
            type="text"
            className="w-2/4 text-lg font-medium border rounded-md h-14 bg-bgInputs border-borderInputs text-[#737373] px-5 "
            value={valuePrice[1]}
          />
        </div>
      </div>

      {/* Chocolates*/}
      <div className="flex flex-col justify-start w-full">
        <p className="text-lg font-bold ">Cantidad de chocolates</p>
        <Slider
          onChange={handleChangeMinChoc}
          value={minChocolates}
          aria-label="Default"
          valueLabelDisplay="auto"
          sx={{
            color: "#282424",
          }}
        />

        <div className="flex justify-start w-full gap-3">
          <input
            onChange={handleChangeMinChocInput}
            type="text"
            className="w-2/4 text-lg font-medium border rounded-md h-14 bg-bgInputs border-borderInputs text-[#737373] px-5 "
            value={minChocolates}
          />
        </div>
      </div>

      {/* Reset*/}
      <div className="w-full">
        <button
          onClick={handleClickReset}
          className=" text-lg w-full gap-3 border border-primary text-center  py-[10px] rounded font-Outfit text-primary font-medium hover:bg-primary hover:text-white duration-[500ms] ease-in-out"
        >
          Resetear filtros
        </button>
      </div>

      {/* Cajas */}
      <div className="w-full">
        <button className=" text-lg w-full gap-3 border border-primary text-center  py-[10px] rounded font-Outfit text-primary font-medium hover:bg-primary hover:text-white duration-[500ms] ease-in-out">
          Crear una caja
        </button>
      </div>
    </div>
  );
};
