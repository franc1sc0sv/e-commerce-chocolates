export const saveCarritoStorage = ({ data }) => {
  window.localStorage.setItem("carritoChocolateriaReact", JSON.stringify(data));
};
export const resetCarritoStorage = () => {
  window.localStorage.removeItem("carritoChocolateriaReact");
};
