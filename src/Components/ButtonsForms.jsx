import { Link } from "react-router-dom";

export const ButtonsForms = () => {
  return (
    <div className="flex gap-10">
      <Link
        to="/"
        className=" py-2 flex items-center text-lg w-36 justify-center bg-primary text-white font-Outfit font-medium rounded-xl hover:bg-white hover:text-primary border border-primary duration-[500ms] ease-in-out"
      >
        Cancelar
      </Link>
      <button
        type="submit"
        className="items-center flex border text-lg border-primary w-36 justify-center rounded-xl font-Outfit text-primary font-medium hover:bg-primary hover:text-white duration-[500ms] ease-in-out"
      >
        Continuar
      </button>
    </div>
  );
};
