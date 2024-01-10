import Image from "next/image";
import GetInTouch from "../getInTouch/GetInTouch";
import Link from "next/link";


const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Vica",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Contact us",
    path: "/contact",
  },
  {
    title: "Our team",
    path: "/team",
  },
];
const Footer = () => {
  return (
    <div>
      <GetInTouch />
      <footer className="w-full h-[145px] flex flex-col items-center justify-center" style={{background: 'linear-gradient(90deg, rgba(4, 92, 125, 0.80) 0%, #045C7D 100%)'}}>
        <div className="custom-container flex flex-col text-center">
         <div className="flex items-center justify-between">
          <div>
              <Image src='./footerLogo.svg' alt="Vica logo" width={120} height={80}/>
          </div>
            <div className="flex flex-col text-white item-center justify-center">
              <ul className="flex justify-between items-center gap-8 text-base font-normal mb-5">
                {links.map((link) => (
                  <Link href={link.path} key={link.title}>{link.title}</Link>
                ))}
              </ul>
              <hr className="text-white"/>
            </div>
            <div className="flex items-center gap-4">
              <Image src='./facebook.svg' alt="Facebook Link" width={30} height={30}/>
              <Image src='./x.svg' alt="X Link" width={30} height={30}/>
              <Image src='./instagram.svg' alt="instagram Link" width={30} height={30}/>
              <Image src='./telegram.svg' alt="telegram Link" width={30} height={30}/>
            </div>
          </div>
        <p className="text-[13px] text-white">COPYRIGHT © 2023 Vica solutions, ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
