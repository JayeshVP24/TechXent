const Footer: React.FC = () => {
  return (
    <footer
      className="bg-elementBlackG rounded-3xl m-10 xl:m-20 2xl: p-10 flex flex-col items-center
        gap-y-10 lg:flex-row justify-between lg:rounded-full lg:px-20 lg:py-5"
    >
      <span className="text-titleC font-bold text-xl ">TechXent Co., 2022</span>
      <div className="text-black ">
        <button
          className="flex  items-center bg-elementWhiteG  
                rounded-full px-8 py-2 gap-x-2
                hover:ring-4 ring-elementWhiteG ring-opacity-40
        transition-all active:scale-90"
        >
          <img src="/SVGs/whatsapp-icon.svg" width={30} height={30} />
          +91 93248 70710
        </button>
      </div>
    </footer>
  );
};

export default Footer;
