import HomeLayout from "../layout/HomeLayout";
import Chocolate from "../Components/Chocolate";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Inicio = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const caja = [
    <Chocolate
      imagen={"Chocolates/hersheys_milk_chocolate.webp"}
      nombre={"Hersheys Barra Milk 43 Gr"}
      precio={"1.30"}
    />,

    <Chocolate
      imagen={"Chocolates/hersheys_whole_almonds.webp"}
      nombre={"Chocolate Hersheys Milk Almond 41Gr"}
      precio={"1.30"}
    />,

    <Chocolate
      imagen={"Chocolates/kitkat.webp"}
      nombre={"Chocolate Kit Kat 4finger 41gr"}
      precio={"1.19"}
    />,
    <Chocolate
      imagen={"Chocolates/m&ms.webp"}
      nombre={"Chocolate M&M's Milk Paquete 47.9gr"}
      precio={"1.25"}
    />,

    <Chocolate
      imagen={"Chocolates/snickers.webp"}
      nombre={"Chocolate Con Maní Snickers 1.86oz"}
      precio={"1.30"}
    />,
  ];

  return (
    <HomeLayout>
      <div className=" flex flex-col items-center w-full mb-6">
        <div className=" relative w-full">
          <p className=" font-SourceCodePro font-bold text-white absolute z-10 top-1/2 -translate-y-1/2 text-6xl w-full text-center">
            Los negros siempre son los mejores
          </p>
          <img
            src="/chocolatoso.png"
            alt=""
            className=" w-full h-96 object-cover "
          />
          <div className=" bg-black top-0 right-0 left-0 bottom-0 absolute opacity-50"></div>
        </div>
        <p className=" font-extrabold font-Outfit text-4xl mt-8 mb-8">
          Nuestros mejores productos
        </p>
        <div className=" w-[80%] ">
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            ssr={true}
            centerMode={true}
          >
            <div> {caja[0]} </div>
            <div> {caja[1]} </div>
            <div> {caja[2]} </div>
            <div> {caja[3]} </div>
            <div> {caja[4]} </div>
          </Carousel>
        </div>
      </div>
    </HomeLayout>
  );
};
