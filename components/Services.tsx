import { IKImage } from "imagekitio-react";
import Image from "next/image";
import imageKitLoader from "../utils/imageKitLoader";

const services = [
  {
    img: "webDev.jpg",
    name: "Web App Development",
  },
  {
    img: "mobDev.jpg",
    name: "Mobile App Development",
  },
  {
    img: "uiux.jpg",
    name: "UI / UX Designing",
  },
  {
    img: "seo.jpg",
    name: "SEO",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="">
      <h1 className="text-elementBlackG text-4xl lg:text-6xl 2xl:text-7xl font-bold mb-4  z-10">
        Our <span className="italic ">Services</span>
      </h1>
      <div className="flex flex-col gap-y-6 xl:gap-y-10 2xl:gap-y-14 mt-8 xl:mt-12 2xl:mt-16 md:flex-row md:justify-around flex-wrap">
        {services.map((s) => (
          <div
            key={s.img}
            className="flex relative bg-elementWhiteG overflow-hidden rounded-3xl items-center
          h-20 xl:h-28 2xl:h-32 md:w-2/5 "
          >
            <Image
              loader={imageKitLoader}
              src={`/${s.img}`}
              width={500}
              height={350}
              alt={s.name}
              className=" w-2/5 rotate-[15deg] relative right-5 bottom-2 object-fit scale-125 md:scale-150  "
              sizes="
              (max-width: 768px) 40vw,
              25vw
              "
            />
            {/* <IKImage
              path={`/${s.img}`}
              transformation={[{
                width: "500",
                height: "350"
              },
            ]}
              className=" w-2/5 rotate-[15deg] relative right-5 bottom-2 object-fit scale-125 mr-8 "              
            /> */}
            <h2 className="font-bold lg:text-lg xl:text-xl 2xl:text-3xl w-2/5 relative 
            left-8 lg:left-12 xl:left-16 2xl:left-20 mr-4">
              {s.name}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
