"use client";
import Image from "next/image";
import GetBtn from "../Btns/GetBtns";

const GetInTouch = () => {
  return (
    <div className="relative bg-[url(../../public/banner.png)] w-full h-[400px] flex flex-col item-center justify-center">
      {/* <div className="w-full h-full">
        <Image src="/banner.png" alt="Get In Touch" fill />
      </div> */}
      <div className="bg-[#045c7d73] w-full h-full absolute flex items-center justify-center text-center">
        <div className=" text-white flex flex-col items-center justify-center w-1/2 mx-auto">
          <h2 className="font-semibold text-5xl capitalize mb-6">
            Contact with vica
          </h2>
          <p className="text-3xl">
            please fill out the form and we will be in touch with you soon
          </p>
          <GetBtn />
        </div>
      </div>
    </div>
  );
};
export default GetInTouch;
