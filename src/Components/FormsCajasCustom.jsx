import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

import { useState } from "react";

export const FormsCajasCustom = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen max-h-96 p-10 w-[50rem] rounded-xl gap-7">
      <p className="text-3xl font-bold font-SourceCodePro">
        Añade tus nuevas cajas
      </p>

      <div className="relative w-full">
        <p className="absolute text-xs font-medium left-11 top-2 font-Inter ">
          Nombre de la caja
        </p>
        <PersonOutlinedIcon className="absolute top-[50%] transform -translate-y-1/2 left-3 text-secundary" />

        <input
          placeholder="Caja para mi novia #1"
          type="text"
          className="w-full pt-5 pb-2 text-sm font-light border rounded-lg h-14 px-11 border-borderInputs placeholder:text-placeHolder font-Inter placeholder:text-sm"
        />
      </div>
      <div className="flex flex-col w-full gap-3">
        <p className="text-base font-medium font-Inter">
          Selecciona tus chocolates
        </p>
        <MultipleSelectCheckmarks />
      </div>

      <button className=" text-2xl w-[60%] gap-3 border border-primary text-center  py-[10px] rounded font-Outfit text-primary font-medium hover:bg-primary hover:text-white duration-[500ms] ease-in-out">
        Añadir
      </button>
    </div>
  );
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
function MultipleSelectCheckmarks() {
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className="w-full">
      <Select
        className="w-full"
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={personName}
        onChange={handleChange}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={personName.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
