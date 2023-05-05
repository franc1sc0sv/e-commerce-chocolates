import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";

export default function Chocolate({ imagen, nombre, precio }) {
  return (
    <div className="shadow-md border max-w-[300px] rounded-xl flex flex-col items-center p-4 h-full justify-between">
      <img width={250} height={300} src={imagen} alt="" />

      <div>
        <p className="text-xl font-bold">{nombre}</p>
        <p className="text-2xl font-bold">${precio}</p>
      </div>
      <button className=" h-max bg-bgInputs w-full rounded p-1 mt-2 mb-2 border-primary hover:bg-primary duration-[500ms] ease-in-out hover:text-white border-[1px]">
        <AddShoppingCartRoundedIcon />
      </button>
    </div>
  );
}
