import Image from "next/image";
import imageKitLoader from "../utils/imageKitLoader";

const WhoWeAre: React.FC = () => {
  return (
    <section
      className="relative bg-elementBlackG rounded-[2rem] lg:rounded-[4rem] p-8 lg:p-16 2xl:p-20 pb-10 overflow-hidden 
    lg:flex justify-around items-center 2xl:mx-20 "
    id="about"
    >
      <Image
        src="/whoWeAre.png"
        width={597}
        height={398}
        alt="svg patterns illustration"
        loader={imageKitLoader}
        className="absolute top-0 left-0 w-full lg:w-[40%] lg:left-16 lg:top-[50%] lg:translate-y-[-50%] z-0"
        sizes="
        (max-width: 1024px) 80vw,
        35vw
        " 
      />
      <h1 className="text-titleC text-4xl lg:text-6xl 2xl:text-7xl font-bold mb-4 lg:w-2/4 z-10">
        <span className="italic block">Who</span> we are
      </h1>
      <span className="lg:w-[40%] italic  text-sm lg:text-base 2xl:text-lg  text-paraC">
        <p className=" ">
          We are a team of dedicated developers and designers. We offer our
          expert services in Web App Development, Mobile App Development, UI/UX
          Designing, Digital Marketing. We offer digital consultancy to clients
          of all backgrounds. We focus on businesses technology-centric
          challenges.
        </p>
        <span className="font-bold underline underline-offset-4 block mt-4 cursor-pointer">
          Read More
        </span>
      </span>
    </section>
  );
};

export default WhoWeAre;
