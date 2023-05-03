import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export const ContainerCajasCustom = () => {
  return (
    <div className="flex flex-col items-center w-auto h-screen gap-5 py-10 basis-full rounded-xl">
      <p className="text-5xl font-bold font-SourceCodePro">
        Tus cajas de chocolates
      </p>
      <div className="flex flex-col w-[80%] gap-5 overflow-y-auto ">
        <CardCajasCustom />
        <CardCajasCustom />
        <CardCajasCustom />
        <CardCajasCustom />
      </div>
    </div>
  );
};

const CardCajasCustom = () => {
  return (
    <div className="flex gap-5 p-5 rounded-lg w- h-max bg-borderInputs">
      <div className=" w-full max-w-[270px] aspect-square h-36 bg-gray-300 rounded-lg"></div>
      <div className="flex flex-col items-start justify-center gap-5">
        <p className="text-xl font-bold font-SourceCodePro">
          Tus cajas de chocolates
        </p>
        <p className="text-3xl font-bold font-SourceCodePro">$2.50 </p>
      </div>
      <div className="flex flex-col w-full gap-2 max-w-[150px]">
        <button className=" text-lg w-full gap-3 border border-primary text-center  py-[10px] rounded font-Outfit text-primary font-medium hover:bg-primary hover:text-white duration-[500ms] ease-in-out">
          <AddShoppingCartIcon />
          Añadir
        </button>
        <button className=" text-lg w-full gap-3 border border-primary text-center  py-[10px] rounded font-Outfit text-primary font-medium hover:bg-primary hover:text-white duration-[500ms] ease-in-out">
          <DeleteOutlineOutlinedIcon />
          Eliminar
        </button>
        <button className=" text-lg w-full gap-3 border border-primary text-center  py-[10px] rounded font-Outfit text-primary font-medium hover:bg-primary hover:text-white duration-[500ms] ease-in-out">
          <EditOutlinedIcon />
          Editar
        </button>
      </div>
    </div>
  );
};
