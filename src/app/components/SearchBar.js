import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdNotifications } from "react-icons/io";

export default function SearchBar({ setShowMenu }) {
  return (
    <section className=" h-[72px] flex items-center justify-between  lg:justify-end gap-5 lg:gap-20 border-b-2 border-b-[#EAECF0] p-3 lg:py-2 lg:pr-10">
      <div className="">
        <RxHamburgerMenu
          className="flex lg:hidden text-primary700 hover:text-primary700/45 ease-in-out cursor-pointer font-bold text-3xl "
          onClick={() => {
            setShowMenu(true);
          }}
        />
      </div>
      <div className="relative lg:w-[320px]">
        <div>
          <IoSearch className="absolute left-3 top-3 text-gray500" />
        </div>

        <input
          placeholder="Search..."
          className="w-full border p-2 pl-9 rounded-md focus:outline-primaryColor text-gray500 placeholder:text-sm placeholder:font-extralight"
        />
      </div>
      <div className="flex gap-6">
        <div className="flex justify-center items-center cursor-pointer hover:animate-pulse ease-in-out">
          <IoMdNotifications className="text-[28px] text-gray700 transition-all duration-300 ease-in-out hover:text-primary700 font-medium " />
        </div>
        <div className="w-[40px]">
          <Image
            src={"/profile.png"}
            width={1000}
            alt="profile thumbnail"
            height={0}
          />
        </div>
      </div>
    </section>
  );
}
