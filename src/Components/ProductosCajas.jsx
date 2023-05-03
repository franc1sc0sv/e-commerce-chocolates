import { CajasCard } from "./CajasCard";

export const ProductosCajas = ({ cajas, isLoading }) => {
  return (
    <div className="grid justify-center h-screen gap-5 py-10 overflow-y-auto border basis-full border-strokeBox rounded-xl grid-cols-products">
      {isLoading ? "Cargando . . . . . . " : <RenderCajas cajas={cajas} />}
    </div>
  );
};

const RenderCajas = ({ cajas }) => {
  return !cajas.length
    ? "No hay resultados para tu busqueda"
    : cajas.map((chocolate, i) => {
        return <CajasCard key={i} datos={chocolate} />;
      });
};
