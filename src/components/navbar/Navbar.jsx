import Image from "next/image";
import HeroBtn from "../Btns/HeroBtn";
import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 z-40 custom-container h-24 flex justify-between items-center bg-white ">
      <div className="logo">
        <Image src="./logo.svg" alt="vica-logo" width={46} height={44} />
      </div>
      <Links />
      <div className="btn">
        <HeroBtn />
      </div>
    </nav>
  );
};
export default Navbar;
