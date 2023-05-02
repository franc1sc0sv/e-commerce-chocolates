import { CardChocolate } from "./cardChocolate";

export const ProductosChocolates = ({ chocolates, isLoading }) => {
  return (
    <div className="grid justify-center h-screen gap-5 py-10 overflow-y-auto border basis-full border-strokeBox rounded-xl grid-cols-products">
      {isLoading ? (
        "Cargando . . . . . . "
      ) : (
        <RenderChocolates chocolates={chocolates} />
      )}
    </div>
  );
};

const RenderChocolates = ({ chocolates }) => {
  return !chocolates.length
    ? "No hay resultados para tu busqueda"
    : chocolates.map((chocolate, i) => {
        return <CardChocolate key={i} datos={chocolate} />;
      });
};
