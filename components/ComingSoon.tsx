import { IKImage } from "imagekitio-react";
import Image from "next/image";
import imageKitLoader from "../utils/imageKitLoader";

const ComingSoon: React.FC = () => {
  return (
    <section className="bg-elementBlackG text-titleC font-bold rounded-3xl italic
    flex flex-col items-center text-center p-10 gap-y-2
    lg:flex-row lg:rounded-[4rem]">
      <h1 className="text-4xl md:text-5xl xl:text-6xl 
      2xl:text-7xl lg:w-2/6" >Coming Soon</h1>
      
      <Image

        alt="Coming Soon illustration"
        src="/comingSoon.png"
        width={500}
        height={500}
        loader={imageKitLoader}    
        className="lg:w-2/6 relative scale-125 "
        sizes="
        (max-width: 1024px) 50vw,
        30vw
        "
      />
      <h2 className="text-3xl md:text-4xl xl:text-5xl 
      !leading-snug lg:w-2/6" >with more services & projects</h2>
    </section>
  );
};

export default ComingSoon;
