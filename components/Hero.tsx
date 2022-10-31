import Image from "next/image";
import imageKitLoader from "../utils/imageKitLoader";

const Hero: React.FC = () => {
  return (
    <section id="home" className=" lg:flex flex-row-reverse items-center">
      <Image
        width={602}
        height={404}
        loader={imageKitLoader}
        priority
        sizes="
        (max-width: 1024px) 85vw,
        35vw
        "
        className=""
        alt="home illustration"
        src="/home.png"
      />
      <div className="mt-8 lg:mt-0 lg:mx-12 lg:mr-28">
        <h1 className="text-4xl lg:text-6xl 2xl:text-7xl font-bold">
          We see <span className="italic">ideas</span> and put them{" "}
          <span className="italic">to work</span>
        </h1>
        <h2 className="font-bold text-xl lg:text-2xl leading-7 mt-4">
          Group of high skilled developers and designers at your service
        </h2>
        <div className="text-sm md:text-base font-semibold flex justify-between sm:justify-start sm:gap-x-6 mt-6 lg:mt-10">
          <button
            className="bg-elementBlackG rounded-full text-titleC  px-8 sm:px-10 xl:px-14  py-2
        hover:ring-4 ring-elementBlackG ring-opacity-20
        transition-all active:scale-90"
          >
            Lets Talk
          </button>
          <button
            className="border-2 border-elementBlackG rounded-full px-8 sm:px-10 xl:px-14  py-2
        hover:ring-4 ring-elementBlackG ring-opacity-20
        transition-all active:scale-90"
          >
            Know more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
