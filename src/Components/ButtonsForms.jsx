import { Link } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";

export const ButtonsForms = ({ isLoading }) => {
  const isLoadingStyles = isLoading
    ? "flex items-center text-lg w-36 justify-center bg-primary text-white font-Outfit font-medium rounded-xl border border-primary duration-[500ms] ease-in-out"
    : "items-center flex border text-lg border-primary w-36 justify-center rounded-xl font-Outfit text-primary font-medium hover:bg-primary hover:text-white duration-[500ms] ease-in-out";
  return (
    <div className="flex gap-10 h-12 ">
      <Link
        to="/"
        className="flex items-center text-lg w-36 justify-center bg-primary text-white font-Outfit font-medium rounded-xl hover:bg-white hover:text-primary border border-primary duration-[500ms] ease-in-out"
      >
        Cancelar
      </Link>
      <button type="submit" className={isLoadingStyles}>
        {isLoading ? (
          <LinearProgress className="w-[60%] rounded-full" color="inherit" />
        ) : (
          "Continuar"
        )}
      </button>
    </div>
  );
};
