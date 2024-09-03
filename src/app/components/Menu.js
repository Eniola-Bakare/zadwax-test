import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { LuClock3 } from "react-icons/lu";
import { TiStarOutline } from "react-icons/ti";
import { TbFolder } from "react-icons/tb";
import { RxInfoCircled } from "react-icons/rx";
import { RiSettings4Line } from "react-icons/ri";

export default function Menu({ setShowMenu }) {
  return (
    <section className="flex flex-shrink-0 w-[300px] lg:w-[237px] bg-white flex-col justify-between h-full pt-4 px-3 pb-[30px] lg:border-r-2  ">
      <div className="__menu-top ">
        <div className="__logo relative flex items-center gap-2 p-2 pt-10 lg:pt-0 pb-3">
          <IoIosCloseCircle
            className="flex lg:hidden text-primary700 cursor-pointer hover:text-primary700/45 text-4xl absolute top-0 right-0"
            onClick={() => setShowMenu(false)}
          />

          <Image
            src="/logo.png"
            width={18}
            height={20}
            className=" cursor-pointer"
            alt="logo text & image"
          />
          <p className="flex-shrink-0 cursor-pointer text-textBlack text-[24px] font-black">
            Zadwax
          </p>
        </div>

        <div className="__menu ">
          <div className="__menu-first">
            <p className="group p-2 flex-shrink-0 flex gap-5 transition-all duration-300 ease-in-out hover:bg-primary50 rounded-lg text-gray700 hover:text-primary700 w-full font-medium  hover:font-semibold text-[21px] ">
              <GoHomeFill className="text-[28px] text-gray700 group-hover:text-primary700 font-medium " />
              Home
            </p>

            <p className="group p-2 flex-shrink-0 flex gap-5 transition-all duration-300 ease-in-out hover:bg-primary50 rounded-lg text-gray700 hover:text-primary700 w-full font-medium  hover:font-semibold text-[21px] ">
              <LuClock3 className="text-[28px] text-gray700 group-hover:text-primary700 font-medium " />{" "}
              Recents
            </p>
            <p className="group p-2 flex-shrink-0 flex gap-5 transition-all duration-300 ease-in-out hover:bg-primary50 rounded-lg text-gray700 hover:text-primary700 w-full font-medium  hover:font-semibold text-[21px] ">
              <TiStarOutline className="text-[28px] text-gray700 group-hover:text-primary700 font-medium " />
              Starred
            </p>
          </div>

          <div className="__menu-second relative border-t-2 ">
            <p className="group p-2 flex-shrink-0 flex gap-5 transition-all duration-300 ease-in-out hover:bg-primary50 rounded-lg text-gray700 hover:text-primary700 w-full font-medium  hover:font-semibold text-[21px] ">
              <TbFolder className="text-[28px] text-gray700 group-hover:text-primary700 font-medium " />{" "}
              Projects
            </p>
          </div>
        </div>
      </div>

      <div className="__menu-btn p-2">
        <p className="group p-2 flex-shrink-0 flex gap-5 transition-all duration-300 ease-in-out hover:bg-primary50 rounded-lg text-gray700 hover:text-primary700 w-full font-medium  hover:font-semibold text-[21px] ">
          <RxInfoCircled className="text-[28px] text-gray700 group-hover:text-primary700 font-medium " />
          Support
        </p>

        <p className="group p-2 flex-shrink-0 flex gap-5 transition-all duration-300 ease-in-out hover:bg-primary50 rounded-lg text-gray700 hover:text-primary700 w-full font-medium  hover:font-semibold text-[21px] ">
          <RiSettings4Line className="text-[28px] text-gray700 group-hover:text-primary700 font-medium " />
          Settings
        </p>
      </div>
    </section>
  );
}
