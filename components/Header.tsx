import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import Link from "next/link";

const Navigations = [
  {
    name: "Home",
    link: "/#home",
  },
  {
    name: "About us",
    link: "/#about"
  },
  {
    name: "Services",
    link: "/#services",
  },
  {
    name: "Portfolio",
    link: "/#portfolio",
  },
];

const Header: React.FC = () => {
  return (
    <header
      className="fixed z-30 w-[85%] lg:w-[80%] 2xl:w-[70%] flex justify-between left-[50%] translate-x-[-50%] bg-elementWhiteG 
    rounded-full px-12 lg:px-24 py-2 lg:py-4 top-6 "
    >
      <span className="text-xl font-bold text-center flex items-center">
        TechXent
      </span>
      <div className="lg:hidden">
        <Menu>
          <MenuButton as={Button}>
            <img src="/SVGs/menu.svg" width="25" height="25" />
          </MenuButton>
          <MenuList className="flex flex-col text-xl bg-elementBlackG text-titleC rounded-2xl p-8 gap-y-4">
            {Navigations.map((n) => (
              <Link key={n.name} href={n.link}>
                {n.name}
              </Link>
            ))}
            <button className="bg-elementWhiteG text-black rounded-full font-semibold px-6 py-1 mt-2 text-center">
              Contact us
            </button>
          </MenuList>
        </Menu>
      </div>
      <nav className="hidden lg:flex items-center gap-x-6 xl:gap-x-12 text-lg">
        {Navigations.map((n) => (
          <Link key={n.name} href={n.link}>
            {n.name}
          </Link>
        ))}
        <button
          className="bg-elementBlackG text-titleC rounded-full font-semibold px-3 ml-4 xl:ml-6 text-center
        xl:text-lg xl:px-8 xl:py-1  
        hover:ring-4 ring-elementBlackG ring-opacity-20
        transition-all active:scale-90"
        >
          Contact us
        </button>
      </nav>
    </header>
  );
};

export default Header;
