import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';


export default function Chocolate({ imagen, nombre, precio, car }) {
  return (
    <div className="shadow-md border max-w-[300px] rounded-xl flex flex-col items-center p-4">
      <img width={250} height={300} src={imagen} alt="" />

      <div>
        <p className="font-bold text-xl">{nombre}</p>
        <p className="font-bold text-2xl">${precio}</p>
      </div>
      <button className=' bg-bgInputs w-full rounded h-full p-1 mt-2 mb-2 border-primary hover:bg-primary duration-[500ms] ease-in-out hover:text-white border-[1px]'> <AddShoppingCartRoundedIcon/> </button>
    </div>
  );
}
