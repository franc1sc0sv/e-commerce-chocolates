import "react-multi-carousel/lib/styles.css";

import HomeLayout from "../layout/HomeLayout";
import Carousel from "react-multi-carousel";
import { CardChocolate } from "../Components/cardChocolate";
import { useChocolates } from "../hooks/useChocolates";

export const Inicio = () => {
  const { chocolates } = useChocolates();

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

  return (
    <HomeLayout>
      <div className="flex flex-col items-center w-full mb-6 ">
        <div className="relative w-full ">
          <p className="absolute z-10 w-full text-6xl font-bold text-center text-white -translate-y-1/2 font-SourceCodePro top-1/2">
            Los negros siempre son los mejores
          </p>
          <img
            src="/chocolatoso.png"
            alt=""
            className="object-cover w-full h-96"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50 "></div>
        </div>
        <p className="mt-8 mb-8 text-4xl font-extrabold font-Outfit">
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
            {chocolates.slice(3).map((chocolate) => {
              return <CardChocolate key={chocolate.id} datos={chocolate} />;
            })}
          </Carousel>
        </div>
      </div>
    </HomeLayout>
  );
};
